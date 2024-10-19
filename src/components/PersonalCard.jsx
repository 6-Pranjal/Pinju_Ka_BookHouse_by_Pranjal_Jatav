

function PersonalCard() {
  return (
<div class="p-10 m-15 h-full w-full">
      <div
        class="border-5 border- p-6 w-fit h-fit mx-auto bg-slate-400 rounded-3xl flex space-x-3 hover:ring-2 ring-black shadow-2xl shadow-lime-200"
      >
        <div class="shrink-0">
          <img
            class="h-16 w-16 border-x-4 border-black rounded-full hover:ring-2 ring-black hover:size-40"
            src="/profile_dp.jpg"
            alt="Pranjal"
          />
        </div>
        <div>
          <div class="text-2xl font-medium text-black">Pranjal Jatav</div>
          <p class="text-lime-100">SGSITS Indore</p>
          <p class="text-lime-100">Btech IT'25</p>
        </div>
      </div>
    </div>

  <div class="flex p-5 m-auto border-4 w-fit h-fit">
      <div class="ring p-3 m-3">About</div>
      <div class="ring p-3 m-3">Skills</div>
      <div class="ring p-3 m-3">Project</div>
      <div class="ring p-3 m-3">Scholaristic Achievements</div>
      <div class="ring p-3 m-3">Extra Curricular</div>
      <div class="ring p-3 m-3">Position And Responsibility</div>
    </div>

    <div class="space-x-3 m-auto p-6 ring text-center">
      <a
        href="https://www.linkedin.com/in/pranjal-jatav-955303220/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in"
        class="text-center text-xs font-bold border-x-slate-700 border-2 p-2 m-2 hover:bg-green-100 active:bg-lime-600"
        >LinkedIn</a
      >
      <a
        href="https://github.com/6-Pranjal"
        class="text-center text-xs font-bold border-x-slate-700 border-2 p-2 m-2 hover:bg-green-100 active:bg-lime-600"
        >GitHub</a
      >
      <a
        href=""
        class="text-center text-xs font-bold border-x-slate-700 border-2 p-2 m-2 hover:bg-green-100 active:bg-lime-600"
        >Instagram</a
      >
      <a
        href="https://unstop.com/u/Prran_jaljatav"
        class="text-center text-xs font-bold border-x-slate-700 border-2 p-2 m-2 hover:bg-green-100 active:bg-lime-600"
        >Unstop</a
      >

      <a
        href="mailto:pranjaljatav306@gmail.com"
        class="email-link text-center text-xs font-bold border-x-slate-700 border-2 p-2 m-2 hover:bg-green-100 active:bg-lime-600"
        >Email</a
      >
    </div>


  )
}

export default PersonalCard
