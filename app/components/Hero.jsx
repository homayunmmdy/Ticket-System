import Link from 'next/link'

const Hero = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="mx-auto mt-10 flex justify-center px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
                <div className="text-center">
                    <h1
                        className="text-base-50 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                        <span className="block xl:inline"><span className="mb-1 block">Manage Your </span>
                            <span className="bg-linear-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
                                Ticket System
                            </span>
                        </span>
                        <div className="mt-2">10X faster
                            <span className="relative mt-3 whitespace-nowrap text-red-600"><svg aria-hidden="true" viewBox="0 0 418 42"
                                className="absolute left-0 right-0 top-3/4 m-auto h-[0.58em] w-fit fill-pink-400/50"
                                preserveAspectRatio="none">
                                <path
                                    d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z">
                                </path>
                            </svg>
                                <span className="relative px-2">with Us.</span>
                            </span>
                        </div>
                    </h1>
                    <p className="mx-auto mt-3 max-w-xl text-lg sm:mt-5 md:mt-5">
                        this simple and easy to use and understand ticket-system is good for the small and even big companies to mangae their tickets
                        and have controll on their workflow
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                        <div className="rounded-md shadow-sm"><Link
                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 md:px-10 md:py-4 md:text-lg"
                            href="/Tickets">Get started for free 🚀
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero