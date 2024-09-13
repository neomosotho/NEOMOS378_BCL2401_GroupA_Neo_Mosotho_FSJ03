//components/LoadingSpinner.js
' use client '

export default function LoadingSpinner() {
    return (

<div class="flex justify-center items-center h-screen">
<div class="flex flex-row gap-2">
  <div class="w-4 h-4 rounded-full bg-gray-400 animate-bounce"></div>
  <div class="w-4 h-4 rounded-full bg-gray-600 animate-bounce [animation-delay:-.3s]"></div>
  <div class="w-4 h-4 rounded-full bg-gray-700 animate-bounce [animation-delay:-.5s]"></div>
</div>
</div>

    )
  }