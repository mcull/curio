import { OpenAI } from 'openai';
import { image as downloadImage } from 'image-downloader';
import filenamify from 'filenamify';
import { readFileSync, writeFileSync } from 'fs';
import dayjs from 'dayjs';
import fetch from 'node-fetch';
import fs from 'fs';
import { humanId, poolSize, minLength, maxLength } from 'human-id';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import "dotenv/config.js";

const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'], 
});

const prompt = process.argv[2];
const imageName = process.argv[3];
const layout = process.argv[4];

if (process.argv.length < 3) {  
    console.log('Usage: node dalle.js "prompt" "imageName" "layout[WIDE|TALL|SQUARE]"');
    process.exit(1);
}

await drawThing(prompt, imageName, layout);

async function drawThing(prompt, size) {

   // async () => {
        try {  
          const imageFile = imageName || humanId();
            // Acceptable Sizes: ['256x256', '512x512', '1024x1024', '1024x1792', '1792x1024'
            const SQUARE = '1024x1024';
            const TALL = '1024x1792';
            const WIDE = '1792x1024';

            let size = TALL;
            if (layout === 'WIDE') {
                size = WIDE;
            } else if (layout === 'SQUARE') {
                size = SQUARE;
            }

            console.log("sending prompt to dalle: " + prompt);
            let image = await openai.images.generate({ 
                model: "dall-e-3",
                prompt: prompt,
                n: 1,
                size: size
            });
            let revisedPrompt = image.data[0].revised_prompt
            let url = image.data[0].url;
            console.log(`got image ${url}`);
            const filename = `${__dirname}/images/${filenamify(imageName + '.png')}`;
            console.log(filename);
            downloadImage({'url':url, 'dest': filename}).then(({ filename }) => {
                console.log('Saved to', filename);
            }).catch((err) => console.error(err));
        } catch (openAIError) { 
            console.log(openAIError);
        }
   //}
}