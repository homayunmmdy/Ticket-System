import Link from "next/link"

const FAB = () => {
    return (
        <div className="fab bottom-12 fab-flower">
            {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
            <div tabIndex={0} role="button" className="btn btn-circle btn-lg">
                <svg
                    aria-label="New"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-6"
                >
                    <path
                        d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"
                    />
                </svg>
            </div>

            {/* Main Action button replaces the original button when FAB is open */}
            <button className="fab-main-action btn btn-circle btn-lg btn-error">
                <Link href="/TicketPage/new">
                    <svg
                        aria-label="New post"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-6"
                    >
                        <path
                            fillRule="evenodd"
                            d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z"
                            clipRule="evenodd"
                        />
                    </svg></Link>
            </button>

            {/* buttons that show up when FAB is open */}
            {/* <button className="btn btn-circle btn-lg">
                <svg
                    aria-label="New camera photo"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-6"
                >
                    <path d="M9.5 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    <path
                        fillRule="evenodd"
                        d="M2.5 5A1.5 1.5 0 0 0 1 6.5v5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 13.5 5h-.879a1.5 1.5 0 0 1-1.06-.44l-1.122-1.12A1.5 1.5 0 0 0 9.38 3H6.62a1.5 1.5 0 0 0-1.06.44L4.439 4.56A1.5 1.5 0 0 1 3.38 5H2.5ZM11 8.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <button className="btn btn-circle btn-lg">
                <svg
                    aria-label="New poll"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-6"
                >
                    <path
                        d="M3 4.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.25 3a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM6.25 7.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM6.25 11.5a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5h-7ZM4 12.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                    />
                </svg>
            </button>
            <button className="btn btn-circle btn-lg">
                <svg
                    aria-label="New gallery photo"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-6"
                >
                    <path
                        fillRule="evenodd"
                        d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm10.5 5.707a.5.5 0 0 0-.146-.353l-1-1a.5.5 0 0 0-.708 0L9.354 9.646a.5.5 0 0 1-.708 0L6.354 7.354a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0-.146.353V12a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V9.707ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <button className="btn btn-circle btn-lg">
                <svg
                    aria-label="New voice"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-6"
                >
                    <path d="M8 1a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0V3a2 2 0 0 0-2-2Z" />
                    <path
                        d="M4.5 7A.75.75 0 0 0 3 7a5.001 5.001 0 0 0 4.25 4.944V13.5h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-1.556A5.001 5.001 0 0 0 13 7a.75.75 0 0 0-1.5 0 3.5 3.5 0 1 1-7 0Z"
                    />
                </svg>
            </button> */}
        </div>
    )
}

export default FAB