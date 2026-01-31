'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { submitInquiry } from '@/app/actions/inquiries'
import { useEffect, useRef } from 'react'
import { NavigationLink } from '@/components/layout/NavigationLink'

const initialState = {
  message: '',
  error: '',
  success: false
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-600 text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700 transition disabled:opacity-50"
    >
      {pending ? '送信中...' : '送信する'}
    </button>
  )
}

export default function ContactPage() {
  const [state, formAction] = useFormState(submitInquiry, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset()
    }
  }, [state.success])

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8 text-center">お問い合わせ</h1>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="mb-8 text-sm text-gray-600 space-y-4">
          <p>ご要望やご意見、ご質問、不具合の報告などをお送りください。</p>
          <p>携帯キャリアのメールアドレス（@docomo.ne.jp、@ezweb.ne.jpなど）にはこちらからの返信が届かない場合があります。</p>
          <p>PCからのメールを受信できるメールアドレスを入力してください。</p>
        </div>

        {state.success && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md border border-green-200">
            {state.message}
          </div>
        )}

        {state.error && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md border border-red-200">
            {state.error}
          </div>
        )}

        <form action={formAction} ref={formRef} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="例: user@example.com"
              className="w-full p-3 border rounded-md bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium mb-1">
              お問い合わせ内容 <span className="text-red-500">*</span>
            </label>
            <textarea
              id="content"
              name="content"
              required
              rows={6}
              placeholder="ご質問、ご要望、不具合の報告などをご記入ください"
              className="w-full p-3 border rounded-md bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="text-center">
            <SubmitButton />
          </div>
        </form>

        <div className="mt-8 pt-6 border-t text-sm text-gray-500">
          <p>
            お問い合わせの前に、
            <NavigationLink href="/privacy" className="text-blue-600 hover:underline mx-1">プライバシーポリシー</NavigationLink>
            および
            <NavigationLink href="/terms" className="text-blue-600 hover:underline mx-1">利用規約</NavigationLink>
            をご確認ください。
          </p>
        </div>
      </div>
    </div>
  )
}
