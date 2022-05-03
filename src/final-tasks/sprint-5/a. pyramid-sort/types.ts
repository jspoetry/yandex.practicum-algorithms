export type ParticipantRecord = [name: string, points: number, penalty: number]
export type Input = [count: number, ...participants: ParticipantRecord[]]