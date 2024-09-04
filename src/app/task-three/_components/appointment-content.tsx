"use client";

import { Button, Textarea } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/date-picker";
import { useState } from "react";

import { now, getLocalTimeZone } from "@internationalized/date";

export default function AppointmentContent() {
	const [submitted, setSubmitted] = useState<boolean>(false);
	const [date, setDate] = useState(now(getLocalTimeZone()));
	const [notes, setNotes] = useState<string>("");

	const handleSubmitAgain = () => {
		setSubmitted(false);
		setDate(now(getLocalTimeZone()));
		setNotes("");
	};

	return submitted ? (
		<div className="flex flex-col items-center justify-center gap-4">
			<h1 className="font-bold">Thank you for submitting!</h1>
			<Button color={"secondary"} onClick={handleSubmitAgain}>
				Submit again
			</Button>
		</div>
	) : (
		<div className="flex flex-col gap-2">
			<h1 className="font-bold">Set an appointment with me</h1>
			<div className="flex flex-col gap-2">
				<DatePicker
					isRequired
					label="Meeting Date"
					variant="bordered"
					hideTimeZone
					showMonthAndYearPickers
					value={date}
					onChange={setDate}
				/>
				<Textarea
					value={notes}
					onValueChange={setNotes}
					isRequired
					label="Reason"
					placeholder="Write your reason for our meeting"
					className="w-full"
				/>
				<Button
					color={submitted ? "default" : "secondary"}
					isDisabled={submitted || !date || !notes}
					onClick={() => setSubmitted(true)}
				>
					{submitted ? "Submitted!" : "Submit"}
				</Button>
			</div>
		</div>
	);
}
