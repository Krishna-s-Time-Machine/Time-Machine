---
author: Krishna Chaitanya
pubDatetime: 2025-01-04T20:11:34
modDatetime: 2025-01-11T20:11:34
title:  Mining Monero on GitHub Codespaces - My Experiment and Lessons Learned
slug: Crypto-6
featured: true
draft: false
tags:
  - Crypto
  - blogs
  - Bitcoin
  - Blockchain
  - Monero
description:
   I had a wild idea—what if I mined Monero using free cloud services like GitHub Codespaces? After days of tweaking, bypassing restrictions, and even roping in old accounts, I managed to get it running. But reality hit hard. Between auto-shutdowns, account suspensions, and minimal earnings, the whole experiment turned out to be a massive waste of time. Lesson learned, just because something is “free” doesn’t mean it’s worth the effort.
---

It all started on an ordinary, painfully boring morning. Just another day of checking pull requests on my DevBlogs website, listening to The Weeknd's newly released song "Timeless," and pretending to be productive. I usually manage my repositories using GitHub Codespaces because, let’s be real, it’s free. And free is my favorite price. Why should I waste my own laptop’s precious storage, battery life, and processing power when GitHub is generous enough to let me run all my operations on their cloud infrastructure?

Now, here’s the thing. For over a year, a wild, persistent thought had been floating around in my head: “What if I mine Monero using these free cloud services?” I mean, I’m already using them daily for my development work, so why not squeeze some crypto out of them too? Back in 2023, when I first started using Codespaces, I had this exact idea, but back then, I was completely clueless about setting up mining software in a cloud environment. XMRig, the go-to mining software, is a full-fledged CLI application designed for Windows, Mac, and Linux. Obviously, running it directly on Codespaces wasn’t an option. So, I did what any rational tech enthusiast would do—I scoured every corner of the internet, watched obscure YouTube tutorials, and asked my KHC community friends. Their response?

“Be practical, bro. If mining in GitHub Codespaces was possible, every MF out there would be doing it. It’s not possible. Period.”

At the time, that seemed like a fair and logical point. I laughed at my own stupidity and moved on.

But now, after using Codespaces for over a year, I had gained enough knowledge (or so I thought). I spun up a new Codespace instance, selecting the best possible configuration available—4 CPU cores, 16GB RAM, and 32GB of storage. This was the max I could get for free, and I was determined to make it work. I went all in, trying every installation method, tweaking every possible setting, bypassing every restriction I could find. And every single time, GitHub shut me down. Turns out, they had builtin restrictions that blocked any attempt to install mining software.

After days of frustration, failed attempts, and deep discussions with my community, I had a light bulb moment. GitHub was blocking the Packed version of XMRig, but what if… I just unpacked the software, modified it slightly, and committed it to a new private repository? If I reassembled it inside Codespaces, GitHub wouldn’t even realize what was happening.

Boom. It worked. Just like that, I had successfully installed XMRig in GitHub Codespaces.

Excited beyond belief, I meticulously set everything up—Monero wallet, mining pool configurations, fine-tuning performance settings, the whole deal. I fired up the miner, heart pounding in anticipation, and bam! It was working. The hashrate? A solid 1.6k H/s pretty much the same as my laptop. Seeing that sweet mining reward land in my wallet was the highlight of my day.

Naturally, I started crunching numbers. At 1.6k H/s, I was making around 0.0002 XMR per day, which translated to about 6 INR. Not much, but hear me out—what if I scaled this up? If I created 10 GitHub accounts, I could make 60 INR a day. That’s 1,800 INR a month, for free. And if I scaled it to 100 accounts? That’s a solid 18K per month. My inner evil genius was screaming with excitement.

But then, reality hit me like a truck.

Within 30 minutes, my Codespace shut down. My heart sank—did GitHub just ban me? Was my account flagged? Panic set in as I scrambled to check my email. Turns out, Codespaces have an auto-shutdown feature after 30 minutes of inactivity. I felt like an idiot. It took me two full days to realize this was the issue.

Determined to outsmart the system, I set up a new GitHub account and got back to work. This time, I wrote a simple bash script to keep Codespaces alive by sending a ping every 5 minutes. Boom! It worked. After running for a full 24 hours, I confirmed my rewards were coming in. Everything was looking perfect.

Then, I got greedy.

I started creating multiple GitHub accounts to scale up my mining operation. At around 4-5 accounts, GitHub flagged my IP and suspended all my newly created accounts. Why? Because of the unusually high CPU usage. They weren’t stupid after all. Even trying to create accounts using Tor didn’t work.

So, I switched strategies. Instead of creating new accounts, I turned to my old, inactive accounts. These weren’t flagged because they had history. I even convinced some of my friends—Deepak, Teja, and Chitesh—to lend me their unused GitHub accounts. (I didn’t dare ask my community friends because they take open-source way too seriously, and this wasn’t exactly the most ethical use of free resources.)

For two glorious days, my mining farm was alive. But then, disaster struck again. All accounts hit their free quota limit, and Codespaces shut down one by one. Just like that, my dream of passive income crumbled before my eyes.

After crunching the numbers, I realized that even if I ran this on 10 accounts for 2 days, I’d only make about 0.0017 XMR roughly 35 INR. And after that, I’d have to either wait for the monthly quota to reset or find new accounts.

Total waste of time.

Still, the experiment was fun. I even tried mining on Google Cloud, AWS EC2, and because I love wasting time—Google Colab. None of them were worth the effort. The hash rates were disappointingly low, and cloud providers had even stricter monitoring than GitHub.

So yeah, mining Monero on free cloud services? Technically possible. But practically? Unless you have an army of aged, unused GitHub accounts at your disposal, it’s a complete waste of time.

Just because something is “free” doesn’t mean it’s worth the effort. But hey, it was one hell of a ride while it lasted.

