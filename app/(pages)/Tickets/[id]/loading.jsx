import Container from '@/app/components/Container'

const SingleTicketLoadingPage = () => {
    return (
        <div className="flex flex-col">
            <div className="bg-base-300 shadow-2xl py-8">
                <Container>
                    <div className="skeleton h-4 w-[60%]"></div>
                    <div className="skeleton h-2 w-[80%]"></div>
                    <div className="skeleton h-2 w-[80%]"></div>
                </Container>
            </div>
            <div className="py-8">
                <Container className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/4 px-4">
                        <div className="skeleton h-96  rounded-3xl w-full"></div>
                    </div>
                    <div className="w-full md:w-3/4 px-4">
                        <div className="py-4">
                            <div className="skeleton h-4 w-[80%] mb-4"></div>
                            <div className="skeleton h-4 w-full mb-4"></div>
                            <div className="skeleton h-4 w-full mb-4"></div>
                            <div className="skeleton h-4 w-full mb-4"></div>
                            <div className="skeleton h-4 w-full mb-4"></div>
                            <div className="skeleton h-4 w-full mb-4"></div>
                            <div className="skeleton h-4 w-full mb-4"></div>
                        </div>                    </div>

                </Container>
            </div>
        </div>
    )
}

export default SingleTicketLoadingPage