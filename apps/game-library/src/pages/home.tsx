import { GameCard,IGameData } from "../features/collection/gameCard";

function Home() {
  const arr: Array<IGameData> = [{img:"https://upload.wikimedia.org/wikipedia/en/3/3a/Diablo_Coverart.png",releaseYear:1996,name:"Diablo"},]
  return (
      <div className="w-full h-full grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {arr.map((game)=>{
          return <GameCard img={game.img} releaseYear={game.releaseYear} name={game.name}></GameCard>
        })}
      </div>
  );
}

export default Home;
