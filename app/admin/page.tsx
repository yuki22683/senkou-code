'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { AlertTriangle, Trash2, Mail, MessageSquare } from 'lucide-react'

type Feedback = {
  id: string
  type: string
  message: string
  status: string
  created_at: string
  user_id: string | null
  exercise_id: string | null
  users: {
    email: string
    display_name: string
  } | null
  exercises: {
    title: string
  } | null
}

export default function AdminPage() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
  const [activeTab, setActiveTab] = useState<'all' | 'inquiry' | 'bug'>('all')
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    checkAdminAndFetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const checkAdminAndFetchData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/')
        return
      }

      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('is_admin')
        .eq('id', user.id)
        .single()

      if (userError || !userData?.is_admin) {
        router.push('/')
        return
      }

      setIsAdmin(true)
      fetchFeedbacks()
    } catch (error) {
      console.error('Error checking admin status:', error)
      router.push('/')
    }
  }

  const fetchFeedbacks = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('feedback')
      .select(`
        *,
        users (
          email,
          display_name
        ),
        exercises (
          title
        )
      `)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching feedbacks:', error)
    } else {
      setFeedbacks(data as Feedback[])
    }
    setLoading(false)
  }

  const handleUpdateStatus = async (feedbackId: string, newStatus: string) => {
    const { error } = await supabase
      .from('feedback')
      .update({ status: newStatus })
      .eq('id', feedbackId)

    if (error) {
      alert('ステータス更新に失敗しました: ' + error.message)
    } else {
      fetchFeedbacks()
    }
  }

  const handleDelete = async (feedbackId: string) => {
    if (!confirm('このフィードバックを削除しますか？')) return

    const { error } = await supabase
      .from('feedback')
      .delete()
      .eq('id', feedbackId)

    if (error) {
      alert('削除に失敗しました: ' + error.message)
    } else {
      fetchFeedbacks()
    }
  }

  const filteredFeedbacks = feedbacks.filter(f => {
    if (activeTab === 'all') return true
    if (activeTab === 'inquiry') return f.type === 'inquiry'
    if (activeTab === 'bug') return f.type === 'bug' || f.type === 'improvement' || f.type === 'other'
    return true
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'resolved': return 'bg-green-100 text-green-800'
      case 'ignored': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'inquiry': return <Mail className="w-4 h-4" />
      case 'bug': return <AlertTriangle className="w-4 h-4" />
      default: return <MessageSquare className="w-4 h-4" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'inquiry': return 'お問い合わせ'
      case 'bug': return 'バグ報告'
      case 'improvement': return '改善要望'
      case 'other': return 'その他'
      default: return type
    }
  }

  if (loading && !isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!isAdmin) return null

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <AlertTriangle className="text-amber-500" />
          管理者ダッシュボード
        </h1>

        {/* タブ */}
        <div className="flex space-x-2 mb-6 border-b border-gray-200 pb-1">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 font-medium text-sm rounded-t-md transition-colors ${
              activeTab === 'all'
                ? 'bg-white text-blue-600 border border-b-0 border-gray-200'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            すべて ({feedbacks.length})
          </button>
          <button
            onClick={() => setActiveTab('inquiry')}
            className={`px-4 py-2 font-medium text-sm rounded-t-md transition-colors ${
              activeTab === 'inquiry'
                ? 'bg-white text-blue-600 border border-b-0 border-gray-200'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            お問い合わせ ({feedbacks.filter(f => f.type === 'inquiry').length})
          </button>
          <button
            onClick={() => setActiveTab('bug')}
            className={`px-4 py-2 font-medium text-sm rounded-t-md transition-colors ${
              activeTab === 'bug'
                ? 'bg-white text-blue-600 border border-b-0 border-gray-200'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            問題報告 ({feedbacks.filter(f => f.type !== 'inquiry').length})
          </button>
        </div>

        {/* フィードバック一覧 */}
        <div className="bg-white shadow overflow-hidden rounded-md">
          {loading ? (
            <div className="px-6 py-12 text-center text-gray-500">
              読み込み中...
            </div>
          ) : filteredFeedbacks.length === 0 ? (
            <div className="px-6 py-12 text-center text-gray-500">
              フィードバックがありません
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {filteredFeedbacks.map((feedback) => (
                <li key={feedback.id} className="hover:bg-gray-50 transition-colors">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        {/* ヘッダー */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className="flex items-center gap-1 text-sm font-medium text-gray-700">
                            {getTypeIcon(feedback.type)}
                            {getTypeLabel(feedback.type)}
                          </span>
                          <span className={`px-2 py-0.5 text-xs rounded-full ${getStatusColor(feedback.status)}`}>
                            {feedback.status === 'pending' ? '未対応' : feedback.status === 'resolved' ? '対応済み' : '無視'}
                          </span>
                          <span className="text-xs text-gray-400">
                            {new Date(feedback.created_at).toLocaleString('ja-JP')}
                          </span>
                        </div>

                        {/* ユーザー情報 */}
                        <div className="text-sm text-gray-500 mb-2">
                          {feedback.users ? (
                            <span>{feedback.users.email} ({feedback.users.display_name || '名前なし'})</span>
                          ) : (
                            <span className="text-gray-400">匿名ユーザー</span>
                          )}
                          {feedback.exercises && (
                            <span className="ml-2 text-blue-600">
                              演習: {feedback.exercises.title}
                            </span>
                          )}
                        </div>

                        {/* メッセージ */}
                        <div className="bg-gray-50 p-3 rounded text-sm whitespace-pre-wrap text-gray-700">
                          {feedback.message}
                        </div>
                      </div>

                      {/* アクション */}
                      <div className="ml-4 flex flex-col gap-2">
                        <select
                          value={feedback.status}
                          onChange={(e) => handleUpdateStatus(feedback.id, e.target.value)}
                          className="text-xs border rounded p-1.5 bg-white"
                        >
                          <option value="pending">未対応</option>
                          <option value="resolved">対応済み</option>
                          <option value="ignored">無視</option>
                        </select>
                        <button
                          onClick={() => handleDelete(feedback.id)}
                          className="flex items-center justify-center gap-1 px-2 py-1.5 text-xs text-red-600 border border-red-200 rounded hover:bg-red-50"
                        >
                          <Trash2 className="w-3 h-3" />
                          削除
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
