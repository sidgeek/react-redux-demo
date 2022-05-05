import {
  useCount,
  useDispatchUpdateCount,
  useTheme,
} from "../store/hooks/use-global-status";

export default function DashBoard() {
  const count = useCount();
  const dispatchUpdateCount = useDispatchUpdateCount();
  const theme = useTheme();
  console.log(">> count", count);
  console.log(">> theme", theme);

  return (
    <div>
      <button
        onClick={() => {
          dispatchUpdateCount(count + 1);
        }}
      >
        DashBoard
      </button>
    </div>
  );
}
