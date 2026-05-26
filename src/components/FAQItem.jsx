function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}) {

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-6 text-left font-semibold text-lg hover:bg-gray-50 transition"
      >

        <span>{question}</span>

        <span className="text-2xl">
          {isOpen ? '-' : '+'}
        </span>

      </button>

      {isOpen && (
        <div className="px-6 pb-6 text-gray-600 leading-relaxed">

          {answer}

        </div>
      )}

    </div>
  )
}

export default FAQItem