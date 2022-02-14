import { Link, useOutletContext, useParams } from "remix";

export default function Player() {
  const [teams] = useOutletContext() as any;
  const { teamId, playerId } = useParams();

  const team = teams[parseInt(teamId as string) - 1];
  const player = team.players[parseInt(playerId as string) - 1];

  return (
    <div style={{ padding: 16 }}>
      <p>{team?.name}</p>
      <p>{player?.name}</p>

      <div style={{ paddingTop: 16 }}>
        <Link to={`/teams/${teamId}`}>
          <button type="button" className="button">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}
