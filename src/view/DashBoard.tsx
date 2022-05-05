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

  return (
    <div style={{ display: "flex", flexDirection: "column", marginLeft: 100 }}>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => {
            dispatchUpdateCount(count + 1);
          }}
        >
          button1
        </button>
        <p style={{ width: 200 }}> {count}</p>
      </div>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => {
            dispatchUpdateCount2({ ...count2, value: count2.value + 1 });
          }}
        >
          button2
        </button>
        <p style={{ width: 200 }}> {count2.value}</p>
        <p
          style={{ width: 200 }}
          onClick={() => {
            dispatchUpdateCount2({
              ...count2,
              status: {
                ...count2.status,
                isValid: !count2.status.isValid,
              },
            });
          }}
        >
          {count2.status.isValid ? "打开" : "关闭"}
        </p>
      </div>
    </div>
  );
}
