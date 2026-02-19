import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast';


function App() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onChange" })
  const onSubmit = async (data) => {
    const loadToast = toast.loading('Submitting your data...');

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success('Form submitted successfully!', {
        id: loadToast, // This replaces the loading toast 
        duration: 5000,
        style: {
          border: '1px solid #f97316',
          padding: '12px',
          color: '#c2410c',
        },
        iconTheme: {
          primary: '#ea580c',
          secondary: '#FFFAEE',
        },
      });
      console.log(data);
    } catch (error) {
      toast.error("Something went wrong!", { id: loadToast });
    }
  };

  return (

    <>

      <div className="mt-16 w-full max-w-4xl mx-auto mb-20 px-4">
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30 "></div>
        </div>


      </div>

      <div className="h-full min-h-screen overflow-y-auto p-4 flex flex-col items-center">

        <div className='bg-linear-to-r from-red-600 via-orange-500 to-orange-400 text-white opacity-75 mt-4 md:mt-10 p-4 w-full max-w-5xl mx-auto font-bold flex flex-col md:flex-row justify-between items-center rounded-xl shadow-sm space-y-4 md:space-y-0'>

          <div className='text-3xl md:ml-3'>Logo</div>


          <div className='text-sm md:text-base md:mr-3 p-2 opacity-90 text-center md:text-right'>
            This is a Form. Fill this up to feel how a modern form works.
          </div>
        </div>



        {/* Input Form */}

        <div className='bg-red-500 opacity-80 border border-orange-100 mx-auto mt-10 md:mt-16 p-6 md:p-10 rounded-2xl w-full max-w-md flex flex-col items-center shadow-lg'>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2'>
              <label className='font-semibold text-orange-100 w-full sm:w-24'>Name:</label>
              <div className='flex-col flex w-full'>
                <input
                  className='w-full border-2 autofill:bg-transparent autofill:shadow-[inset_0_0_0_1000px_#dc2626] !autofill:text-white border-orange-400 flex-col rounded-lg p-2 outline-none focus:border-orange-500 transition-all placeholder-white'
                  type="text"
                  placeholder='Type Username'
                  {...register("username", { required: "Username is required", minLength: { value: 3, message: "Username must be at least 3 characters" }, maxLength: { value: 10, message: "Username must be at most 10 characters" } })}
                />
                {errors.username && <span className='text-red-100 text-sm mt-1'>{errors.username.message}</span>}
              </div>

            </div>

            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2'>
              <label className='font-semibold text-orange-100 w-full sm:w-24'>Password:</label>
              <div className='flex flex-col w-full'>
                <input
                  className='w-full border-2 border-orange-400 rounded-lg p-2 outline-none focus:border-orange-500 transition-all placeholder-white'
                  type="password"
                  placeholder='Type Password'
                  {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters" }})}
                />
                {errors.password && <span className='text-red-100 text-sm mt-1'>{errors.password.message}</span>}
              </div>

            </div>

            <div className="flex justify-center pt-4">
              <input
                className='w-full sm:w-auto cursor-pointer border-2 border-orange-200 disabled:cursor-not-allowed disabled:opacity-50 enabled:active:scale-95 bg-linear-to-r from-red-500 to-orange-500 text-white font-bold py-2 px-8 rounded-lg enabled:hover:scale-102 transition-transform shadow-md '
                disabled={!isValid}
                type="submit"
                value="Submit"
              />
            </div>

          </form>
        </div>
      </div>
      <Toaster position='bottom-center'></Toaster>
    </>
  )
}

export default App