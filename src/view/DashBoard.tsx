import {
  useCount,
  useDispatchUpdateCount,
  useCount2,
  useDispatchUpdateCount2,
} from "../store/hooks/use-global-status";

export default function DashBoard() {
  const count = useCount();
  const dispatchUpdateCount = useDispatchUpdateCount();
  const count2 = useCount2();
  const dispatchUpdateCount2 = useDispatchUpdateCount2();
  // console.log(">> count", count);
  // console.log(">> theme", count2);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            dispatchUpdateCount(count + 1);
          }}
        >
          button1
        </button>
        <p> {count}</p>
      </div>
      <div>
        <button
          onClick={() => {
            dispatchUpdateCount2({ ...count2, value: count2.value + 1 });
          }}
        >
          button2
        </button>
        <p> {count2.value}</p>
      </div>
    </div>
  );
}
