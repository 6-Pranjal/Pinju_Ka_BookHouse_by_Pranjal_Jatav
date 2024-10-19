function Cards({ item }) {
  console.log(item);
  return (
    <div className="mt-4 flex justify-center items-center border-x-2 border-slate-100 ">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={item.image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title  ">
            {item.name}
            <div className="badge badge-secondary size-fit ">{item.title}</div>
          </h2>

          <p>{item.author}</p>

          <div className="card-actions justify-end">
            <div className="badge badge-outline hover:text-white bg-gray-500 text-black hover:ring-1 ring-slate-200 hover:shadow-lime-100 hover:shadow-md  ">
              {item.price} Rs
            </div>

            <div className="badge badge-outline hover:text-white bg-gray-500 text-black hover:ring-1 ring-zinc-200 hover:shadow-lime-100 hover:shadow-md">
              Own It Today
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
