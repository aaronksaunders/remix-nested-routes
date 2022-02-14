import { Link, useLocation, useOutletContext } from "remix";

export default function TeamsIndex() {
  const [teams] = useOutletContext() as any;
  return (
    <div>
      <div
        style={{
          padding: 16,
          borderWidth: 1,
          borderColor: "grey",
          border: "solid",
        }}
      >
        <p>This is where the individual teams will appear</p>
        {teams?.map((t: any) => (
          <Link to={`/teams/${t.id}`}>
            <p>{t.name}</p>
          </Link>
        ))}
      </div>

    </div>
  );
}
