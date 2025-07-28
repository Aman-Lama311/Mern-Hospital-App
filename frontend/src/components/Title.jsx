const Title = ({ line1, line2 }) => {
  return (
    <div>
      <p className="text-[#14A2F3] text-2xl font-bold">{line1}</p>
      <h2 className="text-4xl text-[#202B6D] font-semibold leading-tight">
        {line2}
      </h2>
    </div>
  );
};
export default Title;
