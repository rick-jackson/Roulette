import { useContext } from "react";
import { SectionsContext } from "../../SectionsContext";

type SpinButtonProps = {
  spinRoulette: () => void;
  color: string;
};

const SpinButton: React.FC<SpinButtonProps> = ({ spinRoulette, color }) => {
  const { isSpinning } = useContext(SectionsContext);

  return (
    <button
      onClick={spinRoulette}
      disabled={isSpinning}
      className="spin-btn"
      style={{ background: color }}
    />
  );
};

export default SpinButton;
