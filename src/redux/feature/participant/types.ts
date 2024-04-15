export interface ParticipantState {
  participants: Participant[];
  winner: string;
}

export interface Participant {
  name: string;
  id: number;
}
