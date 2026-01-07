#!/bin/bash

# Pythonレッスン用の統一感のある画像を生成するスクリプト
# フラットデザイン、パステルカラー、ミニマルで親しみやすいスタイル

COOKIE="eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..RS0gLBwTIBpLt_bd.XzZ9Z5m6_gqNp4jO_oTE9PGBuJt8Z6442d_gVudHeEbAHBS1WRYYB0FkbVolk0Qa16B6ARc4lVPDaa-UVimRP2YgP07PpvFNC3LaOjRv9F_bEgnOP_an_oCbN3zYLU3vl9TC2--ZnGIuG8PSL-x09Tfy_3CRsj6QwqaLwfv_-Tg4M37KUn7a49dtv2KpzrF7z14ZKcS-aXmHZ9cI_dLVr4ZYmKlvkoA9TSqvheIGTmGT9DDM8C-pWMttUQpBCk-m0g-BOaMjLhY29lqk0kYEdCAgxMRi8_Tf_t2O1bvStRObaztj1KRfcJY7t-IekM1vgi5nDX0uqGivmuQKoiRvlgb4-QOBhAzOuMZynHGK2ojQ3BXUsGBeCTG7RqA74jb74CHF4e0WDHJ_hn5akmlVeOmMe1XHiAVGZdGdw6U_2F0PP5YXB6e80kb4WM9cqQfCTeDooMjaBrClH4eVeWmDSAMIrwsX_HPLS30VHo9N7vjtfaHxDdxIKPPGNQ9nu04KLiE3Ox49u82jXEK_Gggw9_7Zi-MqXH3oJ8mEcfIsWVftX3zcHYSDirqVx7GySOX5r8UJ06jVx1e5czyiYBQjDXpZyKNh4G12b4A8spiecd3QVHFNh_iHHV3_of_jTOMlJ5VbhjxKvevxzAt9tBWCIDxHrfznjp_YhLKHCyLa-3uriL1ZlaZpZSZkqLRzqrBtP9Bz-aMMxVCsGeGF1e8mfioA_jCLV62bKboyiq8ZyO8M-B2qHL-5GGjSI8yGd-b6jB1yROnh6J79SHHTIgqn-Up-mF_jst9txw4L0otc1IpgfhI1s_yDyc9e2NeT2pKA8td5ZRHqJQuD3z2GjtxIYdgH7NNaN28cgljSvjA4sewqR-VfGrWfPM43FARsgBvMTRRT8nI_OHGnt9ECBqKoXe5sZOfIRUpXkhworySuNHJBK4bCaALpsmizWf4OZZwi42nR_ESuA214kaD8Rgw.f9NbcLAdI2Gr6qD_uFMGBg"
OUTPUT_DIR="public/illustrations/python"
STYLE="Flat design, minimalist, pastel colors, friendly and modern illustration style for elementary school students, simple shapes, clean lines, soft gradients, playful but professional"

# 出力ディレクトリを作成
mkdir -p "$OUTPUT_DIR"

echo "🎨 Generating Python lesson images with unified style..."
echo ""

# 1. snake.png - Pythonのロゴ/蛇
echo "📸 Generating snake.png..."
imagefx --cookie "$COOKIE" \
  --prompt "A cute friendly python snake mascot with a happy smile, coiled in a circular shape. $STYLE. Soft blue and yellow pastel colors. White background." \
  --count 1 \
  --dir "$OUTPUT_DIR" \
  --ratio IMAGE_ASPECT_RATIO_SQUARE
mv "$OUTPUT_DIR"/*.png "$OUTPUT_DIR/snake.png" 2>/dev/null || echo "⚠️  Failed to generate snake.png"
sleep 3

# 2. monitor.png - 出力/モニター画面
echo "📸 Generating monitor.png..."
imagefx --cookie "$COOKIE" \
  --prompt "A modern computer monitor displaying text output on screen, showing colorful code or text. $STYLE. Soft purple and cyan colors. White background." \
  --count 1 \
  --dir "$OUTPUT_DIR" \
  --ratio IMAGE_ASPECT_RATIO_SQUARE
mv "$OUTPUT_DIR"/*.png "$OUTPUT_DIR/monitor.png" 2>/dev/null || echo "⚠️  Failed to generate monitor.png"
sleep 3

# 3. magic.png - print関数/魔法
echo "📸 Generating magic.png..."
imagefx --cookie "$COOKIE" \
  --prompt "A magical wand casting sparkles and stars, representing programming magic and print function. $STYLE. Soft pink and purple gradient colors. White background." \
  --count 1 \
  --dir "$OUTPUT_DIR" \
  --ratio IMAGE_ASPECT_RATIO_SQUARE
mv "$OUTPUT_DIR"/*.png "$OUTPUT_DIR/magic.png" 2>/dev/null || echo "⚠️  Failed to generate magic.png"
sleep 3

# 4. box.png - 変数/はこ
echo "📸 Generating box.png..."
imagefx --cookie "$COOKIE" \
  --prompt "A cute storage box or container with a label, representing a variable in programming. $STYLE. Soft orange and yellow colors. White background." \
  --count 1 \
  --dir "$OUTPUT_DIR" \
  --ratio IMAGE_ASPECT_RATIO_SQUARE
mv "$OUTPUT_DIR"/*.png "$OUTPUT_DIR/box.png" 2>/dev/null || echo "⚠️  Failed to generate box.png"
sleep 3

# 5. robot_math.png - 計算/ロボット
echo "📸 Generating robot_math.png..."
imagefx --cookie "$COOKIE" \
  --prompt "A friendly cute robot calculating numbers, with math symbols (plus, minus, multiply, divide) floating around. $STYLE. Soft blue and green colors. White background." \
  --count 1 \
  --dir "$OUTPUT_DIR" \
  --ratio IMAGE_ASPECT_RATIO_SQUARE
mv "$OUTPUT_DIR"/*.png "$OUTPUT_DIR/robot_math.png" 2>/dev/null || echo "⚠️  Failed to generate robot_math.png"
sleep 3

# 6. fstring.png - f-string/文字列フォーマット
echo "📸 Generating fstring.png..."
imagefx --cookie "$COOKIE" \
  --prompt "Text strings being combined or merged together with curly braces symbol, representing string formatting. $STYLE. Soft purple and pink colors. White background." \
  --count 1 \
  --dir "$OUTPUT_DIR" \
  --ratio IMAGE_ASPECT_RATIO_SQUARE
mv "$OUTPUT_DIR"/*.png "$OUTPUT_DIR/fstring.png" 2>/dev/null || echo "⚠️  Failed to generate fstring.png"
sleep 3

# 7. list.png - リスト/データの行列
echo "📸 Generating list.png..."
imagefx --cookie "$COOKIE" \
  --prompt "A vertical list or stack of colorful items in boxes or cards, numbered 0, 1, 2, representing a programming list or array. $STYLE. Soft rainbow pastel colors. White background." \
  --count 1 \
  --dir "$OUTPUT_DIR" \
  --ratio IMAGE_ASPECT_RATIO_SQUARE
mv "$OUTPUT_DIR"/*.png "$OUTPUT_DIR/list.png" 2>/dev/null || echo "⚠️  Failed to generate list.png"
sleep 3

# 8. if.png - 条件分岐
echo "📸 Generating if.png..."
imagefx --cookie "$COOKIE" \
  --prompt "A path splitting into two directions with arrows, representing conditional branching in programming. $STYLE. Soft blue and green colors. White background." \
  --count 1 \
  --dir "$OUTPUT_DIR" \
  --ratio IMAGE_ASPECT_RATIO_SQUARE
mv "$OUTPUT_DIR"/*.png "$OUTPUT_DIR/if.png" 2>/dev/null || echo "⚠️  Failed to generate if.png"
sleep 3

# 9. loop.png - ループ/繰り返し
echo "📸 Generating loop.png..."
imagefx --cookie "$COOKIE" \
  --prompt "A circular arrow or loop symbol showing repetition and cycle, representing programming loops. $STYLE. Soft teal and cyan colors. White background." \
  --count 1 \
  --dir "$OUTPUT_DIR" \
  --ratio IMAGE_ASPECT_RATIO_SQUARE
mv "$OUTPUT_DIR"/*.png "$OUTPUT_DIR/loop.png" 2>/dev/null || echo "⚠️  Failed to generate loop.png"
sleep 3

# 10. dict.png - 辞書/マップ
echo "📸 Generating dict.png..."
imagefx --cookie "$COOKIE" \
  --prompt "A key and lock or key-value pairs in colorful boxes, representing a dictionary or map data structure. $STYLE. Soft yellow and orange colors. White background." \
  --count 1 \
  --dir "$OUTPUT_DIR" \
  --ratio IMAGE_ASPECT_RATIO_SQUARE
mv "$OUTPUT_DIR"/*.png "$OUTPUT_DIR/dict.png" 2>/dev/null || echo "⚠️  Failed to generate dict.png"
sleep 3

# 11. function.png - 関数
echo "📸 Generating function.png..."
imagefx --cookie "$COOKIE" \
  --prompt "A machine or factory with input on one side and output on the other, representing a programming function. $STYLE. Soft purple and blue colors. White background." \
  --count 1 \
  --dir "$OUTPUT_DIR" \
  --ratio IMAGE_ASPECT_RATIO_SQUARE
mv "$OUTPUT_DIR"/*.png "$OUTPUT_DIR/function.png" 2>/dev/null || echo "⚠️  Failed to generate function.png"

echo ""
echo "✅ Image generation completed!"
echo "📁 Images saved to: $OUTPUT_DIR"
