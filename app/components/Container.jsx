
function Container({
    children,
    className = '',
}) {
    return (
        <div
            className={`mx-auto w-full  px-4 sm:px-6  md:px-6 xl:px-10 max-w-full sm:max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] ${className.trim()}`}
        >
            {children}
        </div>
    );
}

export default Container;