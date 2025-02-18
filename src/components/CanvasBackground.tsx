"use client";

import React, { useEffect } from 'react';

const CanvasBackground: React.FC = () => {

    useEffect(() => {

        const colorToRgb = (color: number) => ({
            r: 95, // 95
            g: 195 * Math.cos(color * Math.PI), // 195
            b: 255 * Math.sin(color * Math.PI), // 255
        });

        const setPixel = (ctx: any, x: number, y: number, rgb: any) => {
            const index = (x + y * ctx.canvas.width) * 4;
            const pixels = ctx.canvasImageData.data;
            pixels[index] = rgb.r;
            pixels[index + 1] = rgb.g;
            pixels[index + 2] = rgb.b;
            pixels[index + 3] = 255;
        };

        const calcPlasma = (ctx: any, x: number, y: number, time: number) => {
            const size = ctx.canvas.width / 30;
            let result = 0;

            result += Math.sin(x / size + time);
            result += Math.sin((y / size + time) / 2.0);
            result += Math.sin((x / size + y / size + time) / 2.0);

            const cx = x / size / 10 + 0.8 * Math.sin(time / 4);
            const cy = y / size / 10 + 0.8 * Math.cos(time / 3);
            result += Math.sin(Math.sqrt(100 * (cx * cx + cy * cy + 1)) + time);

            return result;
        };

        let t = 0.0;

        const updateLoop = (ctx: any) => {
            const speed = 0.02; // .07
            t += speed;

            for (let x = 0; x < ctx.canvas.width; x++) {
                for (let y = 0; y < ctx.canvas.height; y++) {
                    const color = calcPlasma(ctx, x, y, t);
                    const rgb = colorToRgb(color);
                    setPixel(ctx, x, y, rgb);
                }
            }

            ctx.canvasContext.putImageData(ctx.canvasImageData, 0, 0);
            // window.requestAnimationFrame(() => updateLoop(ctx));
        };

        const initCanvas = () => {
            const canvas = document.getElementById('canvas') as HTMLCanvasElement;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const canvasContext = canvas.getContext('2d');
            const canvasImageData = canvasContext.createImageData(canvas.width, canvas.height);

            const context = {
                canvas,
                canvasContext,
                canvasImageData,
            };

            return context;
        };

        const context = initCanvas();
        updateLoop(context);

        // Cleanup on component unmount
        return () => {
            window.onload = null; // Remove the event listener
        };
    }, []);

    return (
        <>
            <canvas id="canvas" />
        </>
    );
};

export default CanvasBackground; 