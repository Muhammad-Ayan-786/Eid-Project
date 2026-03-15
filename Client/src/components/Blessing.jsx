import { useDispatch, useSelector } from "react-redux"
import { runCanfetti, setActive, setMessageToDB } from "../store/features/messageSlice"
import { useEffect, useState } from "react"

const Blessing = () => {

  const [userInput, userInputSet] = useState('')

  const dispatch = useDispatch();
  const message = useSelector(state => state.message)

  const handleSendBlessing = () => {
    userInputSet('')
    dispatch(runCanfetti())
    dispatch(setMessageToDB(userInput))
    dispatch(setActive(true))
  }

  useEffect(() => {
    if (message.message.length != 0) {
      setTimeout(() => {
        dispatch(setActive(false))
      }, 5000);
    }
  }, [message.message])

  return (
    <>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 bg-clip-text text-transparent py-2">
        Leave a Blessing for Me
      </h2>
      <p className="text-slate-400 text-center mb-10 max-w-md mx-auto">
        Share a kind word or dua, it means a lot to me!
      </p>
      <div className="max-w-lg mx-auto">
        {message.toggleSendBox ? (
          <p className="text-center text-amber-300 py-10 rounded-2xl bg-slate-800/60 border border-amber-500/30 shadow-lg shadow-amber-500/5">
            Thank you for your blessing! 🕋✨
          </p>
        ) : (
          <div className="flex flex-col sm:flex-row gap-4 p-6 rounded-2xl bg-slate-800/40 border border-slate-700/60">
            <textarea
              value={userInput}
              onChange={(e) => userInputSet(e.target.value)}
              placeholder="Write your blessing here..."
              rows={3}
              className="flex-1 rounded-xl bg-slate-900/60 border border-slate-700/50 px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500/30 resize-none transition-all"
            />
            <button
              onClick={handleSendBlessing}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300 self-end sm:self-center"
            >
              Send
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Blessing