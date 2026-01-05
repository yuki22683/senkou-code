import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const JUDGE0_API_URL = process.env.JUDGE0_API_URL || "http://100.94.143.7:2358";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { source_code, language_id, stdin = "" } = body;

    if (!source_code || !language_id) {
      return NextResponse.json(
        { error: "source_code と language_id は必須です" },
        { status: 400 }
      );
    }

    // Judge0 に送信
    const submissionResponse = await axios.post(
      `${JUDGE0_API_URL}/submissions?base64_encoded=false&wait=true`,
      {
        source_code,
        language_id,
        stdin,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 30000, // 30秒タイムアウト
      }
    );

    const result = submissionResponse.data;

    // レスポンスを整形
    return NextResponse.json({
      status: result.status?.description || "Unknown",
      stdout: result.stdout || "",
      stderr: result.stderr || "",
      compile_output: result.compile_output || "",
      message: result.message || "",
      time: result.time || null,
      memory: result.memory || null,
    });
  } catch (error: any) {
    console.error("Judge0 API Error:", error);

    // タイムアウトエラー
    if (error.code === "ECONNABORTED" || error.message?.includes("timeout")) {
      return NextResponse.json(
        { error: "実行がタイムアウトしました。サーバーからの応答がありません。" },
        { status: 504 }
      );
    }

    // 接続エラー (サーバーがダウンしている等)
    if (error.code === "ECONNREFUSED" || error.code === "ENOTFOUND") {
      return NextResponse.json(
        { error: "実行サーバーに接続できませんでした。しばらく時間をおいてから再試行してください。" },
        { status: 503 }
      );
    }

    if (error.response) {
      return NextResponse.json(
        {
          error: error.response.data?.error || "Judge0 APIからエラーが返されました",
          details: error.response.data,
        },
        { status: error.response.status }
      );
    }

    return NextResponse.json(
      { error: "コードの実行中に予期しないエラーが発生しました" },
      { status: 500 }
    );
  }
}
