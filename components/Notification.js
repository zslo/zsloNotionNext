import { useState } from 'react'

/**
 * 弹框通知
 * @returns
 */
const useNotification = () => {
  const [message, setMessage] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  const showNotification = msg => {
    setMessage(msg)
    setIsVisible(true)
    setTimeout(() => {
      closeNotification()
    }, 3000)
  }

  const closeNotification = () => {
    setIsVisible(false)
    setMessage('')
  }

  // 测试通知效果
  //   const toggleVisible = () => {
  //     setIsVisible(prev => !prev) // 使用函数式更新
  //   }
  //   useEffect(() => {
  //     document?.addEventListener('click', toggleVisible)
  //     return () => {
  //       document?.removeEventListener('click', toggleVisible)
  //     }
  //   }, [])

  /**
   * 通知组件
   * @returns
   */
  const Notification = () => {
    return (
      <div className='notification fixed inset-x-0 bottom-16 z-20 flex justify-center pointer-events-none'>
  <div
    className={`${
      isVisible && message
        ? 'visible opacity-100 translate-y-0'
        : 'invisible opacity-0 translate-y-2'
    } transition-all duration-500
    px-6 py-3 bg-black/70 text-white text-center
    rounded-full shadow-lg backdrop-blur-sm`}
  >
    {message}
  </div>
</div>
    )
  }

  return {
    showNotification,
    closeNotification,
    Notification
  }
}

export default useNotification
