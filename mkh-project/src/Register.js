<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="../../dist/output.css" rel="stylesheet">
  <title>Register</title>
</head>
<body class="">
  <section>
    <div class="flex flex-col items-center justify-center px-7 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full md:mt-0 sm:max-w-md xl:p-0 bg-slate-200">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-5xl	 leading-tight tracking-tight text-gray-500 md:text-2x text-center">
                    Register
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-800">User</label>
                        <input type="user" name="user" id="user" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5" required="">
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-800">Email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5" required="">
                      </div>
                      <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-800">Password</label>
                        <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-1.5" required="">
                      </div>
                      <div>
                    <button type="submit" class="w-full mt-2 mb-2 text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center">Register</button>
                  </div>
                    <p class="text-sm font-light text-black-600">
                        Already Registered? <a href="#" class="font-bold text-primary-600 hover:underline dark:text-primary-500">Login</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
</body>
</html>
