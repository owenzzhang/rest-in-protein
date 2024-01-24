function Flavours() {
  return (
    <div className="my-6">
      <form className="flex flex-col">
        <label className="uppercase pb-2 font-semibold">Choose a flavour</label>
        <select className="border-solid border-grey-400 border-[1px] py-4 rounded w-[500px] px-2 font-light">
          {product.flavour?.map((each) => (
            <option>{each}</option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default Flavours;
