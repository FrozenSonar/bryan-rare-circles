import type { UserDetail } from "~/types";

interface UserDetailsContentProps {
	user?: UserDetail;
}

export function UserDetailsContent({ user }: UserDetailsContentProps) {
	if (!user) {
		return <div />;
	}

	return (
		<div>
			<h3 className="text-2xl font-bold">{user?.full_name}</h3>
			<h3 className="text-xl ">{user?.address.city}</h3>
			<h3 className="text-xl ">{user?.address.street}</h3>
		</div>
	);
}
