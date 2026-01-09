'use server'

import { createClient } from '@/lib/supabase/server'

interface InquiryState {
  message: string
  error: string
  success: boolean
}

export async function submitInquiry(
  prevState: InquiryState,
  formData: FormData
): Promise<InquiryState> {
  const email = formData.get('email') as string
  const content = formData.get('content') as string

  if (!email || !content) {
    return {
      message: '',
      error: 'メールアドレスとお問い合わせ内容を入力してください。',
      success: false
    }
  }

  // メールアドレスの簡易バリデーション
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      message: '',
      error: '有効なメールアドレスを入力してください。',
      success: false
    }
  }

  // 内容が短すぎる場合
  if (content.trim().length < 10) {
    return {
      message: '',
      error: 'お問い合わせ内容は10文字以上で入力してください。',
      success: false
    }
  }

  try {
    const supabase = await createClient()

    // feedbackテーブルに保存（既存のfeedbackテーブルを利用）
    const { error } = await supabase.from('feedback').insert({
      type: 'inquiry',
      message: `【お問い合わせ】\nメール: ${email}\n\n${content}`,
    })

    if (error) {
      console.error('Inquiry submission error:', error)
      return {
        message: '',
        error: '送信に失敗しました。しばらく経ってから再度お試しください。',
        success: false
      }
    }

    return {
      message: 'お問い合わせを受け付けました。ご連絡ありがとうございます。',
      error: '',
      success: true
    }
  } catch (error) {
    console.error('Inquiry submission error:', error)
    return {
      message: '',
      error: '送信中にエラーが発生しました。しばらく経ってから再度お試しください。',
      success: false
    }
  }
}
