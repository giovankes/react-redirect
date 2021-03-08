import { } from 'dotenv/config'
import express from 'express'
import cors from 'cors' 
import expressMorgan from 'morgan';
import bodyparser from 'body-parser';
import { } from 'dotenv/config';

//routes


app.use(cors());
app.use(bodyparser.json());

