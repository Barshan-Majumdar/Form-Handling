import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast';


function App() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onChange" })
  const onSubmit = async (data) => {
    // 1. Create a promise to simulate a database save
    const loadToast = toast.loading('Submitting your data...');

    try {
      // Simulate a 2-second delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // 2. Success toast
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

      <div className="mt-16 w-full max-w-4xl mx-auto mb-20 px-4 overflow-hidden">

        {/* The "Frame" of the video */}
        {/* Background Video */}
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

          {/* Dark/Blur Overlay (Optional but recommended for readability) */}
          <div className="absolute inset-0 bg-black/30 "></div>
        </div>

        
      </div>

      <div className="h-150 overflow-hidden p-4 ">

        <div className='bg-linear-to-r from-red-600 via-orange-500 to-orange-400 text-white opacity-75 mt-10 p-4 max-w-5xl w-auto mx-auto font-bold flex flex-col md:flex-row justify-between items-center rounded-xl shadow-sm'>

          <div className='text-3xl md:ml-3'>Logo</div>


          <div className='text-sm md:text-base md:mr-3 p-2 opacity-90 text-center md:text-right'>
            This is a Form. Fill this up to feel how a modern form works.
          </div>
        </div>



        {/* Input Form */}

        <div className='bg-red-500 opacity-70  border border-orange-100 mx-auto mt-16 p-10 rounded-2xl w-fit flex flex-col items-center shadow-none'>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className='flex  items-center justify-between'>
              <label className='font-semibold text-orange-100 w-24'>Name:</label>
              <div className='flex-col flex'>
                <input
                  className='border-2 autofill:bg-transparent autofill:shadow-[inset_0_0_0_1000px_#dc2626] !autofill:text-white border-orange-400 flex-col rounded-lg p-2 outline-none focus:border-orange-500 transition-all placeholder-white'
                  type="text"
                  placeholder='Type Username'
                  {...register("username", { required: "Username is required", minLength: { value: 3, message: "Username must be at least 3 characters" }, maxLength: { value: 10, message: "Username must be at most 10 characters" } })}
                />
                {errors.username && <span className='text-red-100 text-sm mt-1'>{errors.username.message}</span>}
              </div>

            </div>

            <div className='flex items-center justify-between'>
              <label className='font-semibold text-orange-100 w-24'>Password:</label>
              <div className='flex flex-col'>
                <input
                  className='border-2 border-orange-400 rounded-lg p-2 outline-none focus:border-orange-500 transition-all placeholder-white'
                  type="password"
                  placeholder='Type Password'
                  {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters" }, pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, message: "Password must contain letters and numbers" } })}
                />
                {errors.password && <span className='text-red-100 text-sm mt-1'>{errors.password.message}</span>}
              </div>

            </div>

            <div className="flex justify-center pt-4">
              <input
                className='cursor-pointer border-2 border-orange-200 disabled:cursor-not-allowed disabled:opacity-50 enabled:active:scale-95 bg-linear-to-r from-red-500 to-orange-500 text-white font-bold py-2 px-8 rounded-lg enabled:hover:scale-102 transition-transform shadow-md '
                disabled={!isValid}
                type="submit"
                value="Submit"
              />
            </div>

          </form>
        </div>

        {/* Video Section Wrapper */}



      </div>
      <Toaster position='bottom-center'></Toaster>
    </>
  )
}

export default App