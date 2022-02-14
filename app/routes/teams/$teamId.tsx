import { Link, useOutletContext, useParams } from "remix";

export default function Team() {
  const [teams] = useOutletContext() as any;
  const { teamId } = useParams();
  return (
    <div style={{ padding: 16 }}>
      <p>{teams[parseInt(teamId as string) - 1].name}</p>
      {teams[parseInt(teamId as string) - 1].players?.map((p: any) => (
        <div style={{ paddingTop: 10 }}>
          <Link to={`/teams/${teamId}/player/${p.id}`}>
            <div>{p.name}</div>
          </Link>
        </div>
      ))}
      <div style={{ paddingTop: 16 }}>
        <Link to="/teams">
          <button type="button" className="button">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}
