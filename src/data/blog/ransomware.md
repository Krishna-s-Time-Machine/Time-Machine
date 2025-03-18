---
author: Krishna Chaitanya
pubDatetime: 2022-05-21T20:20:00Z
title: Inside the Mind of Ransomware - My Experience and Insights
slug: ransomware
featured: true
draft: false
tags:
  - docs
description:
  This ain’t just a write-up; it’s my journey—an exploration into the ruthless world of ransomware, the lessons I learned, the shocking truths I uncovered, and the very reason Snakes Ransomware became my project. From real-world cyber disasters to my own hands-on analysis, this is a story I won’t forget
---

I still remember the moment I first started diving into the world of ransomware. It wasn’t just another cybersecurity concept or a weekend project—it was a rabbit hole that kept pulling me deeper. I had read about it before, knew the basics, but the more I explored, the more unsettling it became. This wasn’t just some theoretical malware; this was an entire economy, a digital form of extortion that had taken down massive corporations, crippled hospitals, and even put governments on their knees.

It started as a casual curiosity, but soon, I was consumed by a single question: How does something so devastating work? How do these attackers slip into networks, encrypt files, and demand millions in ransom payments without getting caught? And more importantly, why has no one been able to completely stop them? These questions became an obsession, leading me to build my own experimental ransomware—purely for educational purposes, of course. I needed to see, firsthand, how this beast operated.

### The Dark Side of Ransomware

I had heard about the big ransomware attacks, but nothing really hit me until I started researching the infamous WannaCry attack of 2017. That was a wake-up call. It infected over 200,000 computers across 150 countries, locking out businesses, government agencies, and even hospitals. Critical patient data was suddenly inaccessible, surgeries got postponed, and lives were literally put at risk—all because of a few lines of malicious code. It spread like wildfire, taking advantage of a vulnerability in Windows that had already been patched, but many systems were still unprotected. And the scariest part? The ransom demands weren’t even that high—just $300 to $600 in Bitcoin per machine. The goal wasn’t to hit one big target but to infect as many systems as possible, making a fortune in small payments.

Then came NotPetya, a different kind of monster. Unlike WannaCry, which at least pretended to offer decryption keys after payment, NotPetya was pure destruction. It wiped out entire infrastructures, taking down huge corporations like Maersk, a major shipping company, and even pharmaceutical giant Merck. Maersk alone lost over $300 million because of it. The attack originated in Ukraine, supposedly targeting local businesses, but it didn’t stop there. It spread globally, proving that ransomware wasn’t just a criminal enterprise—it was becoming a weapon of cyber warfare.

At this point, I was horrified. These weren’t just attacks; they were economic disasters, capable of bringing down entire industries overnight. And the worst part? The people behind these attacks were often untouchable, hiding behind layers of anonymity, using cryptocurrency to cover their tracks, and leveraging underground forums to distribute their malware.

### My Experience with Snakes Ransomware

With all this knowledge swirling in my head, I decided to get hands-on. I wanted to build a ransomware simulation, something that could encrypt and decrypt files just to understand the mechanics. That’s when I created [Snakes Ransomware](../Understanding-Ransomware-and-a-Dive-into-Snakes-Ransomware/)—a simple Python-based tool that mimicked the core functionality of real ransomware. The moment I ran my first encryption test, I felt a chill. In just seconds, every file in my test directory was unreadable. Gone. Just like that. And the only way to get them back? The decryption key.

That’s when it really hit me—how terrifyingly easy it was to lock someone out of their own data. A few lines of code, a simple script running in the background, and an entire system could be held hostage. No elaborate hacking, no deep network penetration, just a simple execution and boom—game over.

I kept refining my project, improving the encryption method, experimenting with key storage mechanisms, and testing different payload delivery methods. The deeper I went, the more I realized how trivial it was to modify the attack vectors. Phishing emails, malicious links, fake software updates—there were countless ways to deliver ransomware, and they all worked because of one simple fact: human error.

No matter how advanced cybersecurity systems get, they can’t fully protect against an employee clicking the wrong link or downloading the wrong attachment. And cybercriminals know this. That’s why they don’t just rely on zero-day exploits; they exploit human psychology, fear, urgency, and deception to trick people into opening the door for them.

### The Reality of Modern Ransomware

What’s even more disturbing is how ransomware has evolved into a business model. These aren’t just lone hackers sitting in dark rooms—they’re organized groups running ransomware-as-a-service (RaaS) operations. They develop ransomware and lease it out to affiliates, who then execute attacks and split the profits. It’s a full-fledged industry, with customer support, negotiation tactics, and even “ethical” guidelines (some groups refuse to attack hospitals or schools, as if that makes them any less criminal).

And the payouts? Insane. Some organizations pay millions just to get their data back. The Colonial Pipeline attack in 2021, for example, forced one of the largest fuel suppliers in the U.S. to shut down operations, leading to fuel shortages and panic buying. They ended up paying a $4.4 million ransom just to restore their systems.

But here’s the kicker—paying the ransom doesn’t always work. Sometimes the decryption key doesn’t restore all files. Sometimes attackers take the money and vanish. And sometimes, even after payment, companies get hit again because they’re now seen as an easy target. It’s a lose-lose situation.

### Is It Really That Easy to Ransom Someone’s Computer?

After everything I learned, one thought kept nagging me: Is it really this easy to ransom someone’s computer in today’s world? And the answer is, unfortunately, yes. It’s disturbingly easy. Cybercriminals don’t need deep technical skills anymore. With RaaS, anyone with access to the dark web and a bit of Bitcoin can launch their own ransomware campaign. Automated tools handle the encryption, the ransom notes, and even the payment processing. Everything is streamlined.

And as long as people keep paying, the attacks will keep coming. Companies, governments, individuals—no one is safe. The only real defense is preparation: regular backups, strict access controls, and constant vigilance. But even then, the threat is always there, lurking, waiting for the right moment to strike.

This journey into ransomware has been an eye-opener, a reminder that cybersecurity isn’t just about firewalls and antivirus software—it’s a constant battle of knowledge, deception, and risk. And in this digital age, one wrong click can cost millions.

Ransomware isn’t just a piece of code. It’s a weapon. And it’s more dangerous than ever.

