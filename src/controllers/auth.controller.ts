import {  Request, Response } from 'express';
import {
    getGithubOathToken,
    getGithubUser,
  } from '../services/session.service';
import { createUserWithToken } from '../services/user.service';

export const githubOauthHandler = async (
    req: Request,
    res: Response,
  ) => {
    try {
      const code = req.query.code as string;
  
      if (!code) {
        return res.json({error: 'authorization code not provided'})
      }

      const { access_token } = await getGithubOathToken({ code });

      const userData = await getGithubUser({access_token});

      const returnedUser = await createUserWithToken(userData)
      
      res.json({user: returnedUser})
      
    } catch (err: any) {
      res.json({'error': err.message})
    }
  };
  