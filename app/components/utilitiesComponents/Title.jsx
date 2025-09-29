
const Title = ({ title }) => {
  return (
    <div
      className="container mx-auto p-2 
        flex justify-center items-center"
    >
      <p
        className="
            text-gray-200 
            text-[25px] font-bold 
            tracking-wider 
            border-zinc-600
            px-8 pt-16 border-b-4
            pb-4"
      >
        {title}
      </p>
    </div>
  );
}
export default Title;