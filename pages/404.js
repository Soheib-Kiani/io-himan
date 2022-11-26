import Link from "next/link";

const notfound = () => {
    return (
        <div>
            صفحه مورد نظر یافت نشد
            <Link href="/"><p className='text-blue-700 cursor-pointer'>بازگشت به صفجه ی اصلی</p></Link>
        </div>
    );
}

export default notfound;