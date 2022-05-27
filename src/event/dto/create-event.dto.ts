export class CreateEventDto {
  source: Service;
  type: string;
}

export enum Service {
  Jira,
  Github,
}
