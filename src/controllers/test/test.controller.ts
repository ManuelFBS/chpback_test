import { Request, Response } from 'express';

export const testController = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const greetings: string =
      'Greetings... This a test for deploy...!';

    return res.status(200).json(greetings);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    } else {
      return res.status(500).json(error);
    }
  }
};
