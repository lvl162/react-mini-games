interface GameCardProps {
  title: string;
  icon: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, icon }) => {
  return (
    <div className="bg-blue-200 p-4 rounded-lg shadow-md">
      <div className="text-2xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
        Play Now
      </button>
    </div>
  );
};

export default GameCard;
