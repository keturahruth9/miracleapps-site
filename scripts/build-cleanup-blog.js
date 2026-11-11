// Builds the static pages under /cleanupai/blog/ (index + articles) from the content below.
// Run: node scripts/build-cleanup-blog.js
// Edit an article here and re-run, so the title, meta tags and JSON-LD stay in step with the text.
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const site = "https://www.miracleapps.in";
const base = "/cleanupai/blog/";
const published = "2026-11-11";
const publishedLabel = "November 11, 2026";
const ios = "https://apps.apple.com/app/id6760357173";
const android = "https://play.google.com/store/apps/details?id=com.freespace.cleanup";
const esc = (value) => String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const badges = (lazy) => `<div class="badges">
          <a class="badge ios" data-store="ios" href="${ios}" aria-label="Download on the App Store"><img src="/assets/store-badges/app-store.svg" width="120" height="40"${lazy ? ' loading="lazy"' : ""} alt="Download on the App Store"></a>
          <a class="badge android" data-store="android" href="${android}" aria-label="Get it on Google Play"><img src="/assets/store-badges/google-play.png" width="646" height="250"${lazy ? ' loading="lazy"' : ""} alt="Get it on Google Play"></a>
        </div>`;

const articles = [
  {
    slug: "free-up-iphone-storage-without-losing-photos",
    title: "How to free up storage on iPhone without losing photos",
    description: "Eight steps to free up iPhone storage while keeping the photos you care about: optimize storage, merge duplicates, compress videos and clear what is already deleted.",
    body: `
<p>The "iPhone Storage Almost Full" warning usually arrives at the worst moment, and the obvious fix, deleting photos, is the one nobody wants. The good news is that most of the space on a full iPhone is not taken up by photos you care about. It is taken up by videos, duplicates, screenshots and files that were already deleted but have not left the phone yet. This guide goes through the steps in the order that frees the most space for the least risk.</p>

<h2>1. See what is using the space</h2>
<p>Open <strong>Settings &gt; General &gt; iPhone Storage</strong>. After a few seconds you get a coloured bar and a list of apps sorted by size. Photos is often at or near the top, but check the others too. A messaging app with years of shared media, or a streaming app with downloads, can be several gigabytes on its own.</p>
<p>The same screen may show recommendations, such as reviewing large attachments or your own videos. They are safe to open and look at. Nothing is removed until you choose it.</p>

<h2>2. Back up before you clean</h2>
<p>You are far less likely to lose a photo if a second copy exists. Any of these works:</p>
<ul>
<li><strong>iCloud Photos</strong> keeps your library in iCloud and in sync across your devices.</li>
<li><strong>A computer.</strong> Connect the iPhone with a cable and import through the Photos app on a Mac or on a Windows PC.</li>
<li><strong>Another cloud service</strong> you already use for photo backup.</li>
</ul>
<p>One thing to know: iCloud Photos is a sync, not an archive. If you delete a photo on your iPhone while iCloud Photos is on, it is deleted from iCloud and from your other devices as well.</p>

<h2>3. Turn on Optimize iPhone Storage</h2>
<p>If you use iCloud Photos, this one setting can recover a large share of your photo storage without deleting anything. Go to <strong>Settings &gt; [your name] &gt; iCloud &gt; Photos</strong> and choose <strong>Optimize iPhone Storage</strong>. The full-resolution originals stay in iCloud and the phone keeps smaller versions, downloading the original when you open or edit a photo.</p>
<p>It needs enough iCloud storage to hold your library, and it works gradually, so give it time on Wi-Fi and power.</p>

<h2>4. Merge exact duplicates</h2>
<p>On iOS 16 and later, Photos detects duplicate photos and videos and lists them in a <strong>Duplicates</strong> album under Utilities. Tap <strong>Merge</strong> and the iPhone keeps the best-quality version, combines details such as captions and favourites, and moves the others to Recently Deleted. You lose nothing you would notice. Our guide to <a href="${base}delete-duplicate-photos-iphone/">deleting duplicate photos on iPhone</a> covers this step in detail.</p>

<h2>5. Shrink your videos instead of deleting them</h2>
<p>Video is usually where the real space is. A minute of 4K footage takes several times the space of a minute of 1080p, and a handful of long clips can outweigh thousands of photos.</p>
<p>For videos you record from now on, open <strong>Settings &gt; Camera &gt; Record Video</strong> and pick a lower resolution or frame rate. The screen shows roughly how much space each option uses per minute. Under <strong>Settings &gt; Camera &gt; Formats</strong>, High Efficiency also keeps new files smaller.</p>
<p>For videos you already have, the Photos app has no compress button. A compression tool can save a video again at a smaller size, so you keep the video and lose the weight. <a href="/cleanupai/">Cleanup</a> does this: choose low, medium or high compression and it shows the size before and after. See <a href="${base}compress-large-videos-iphone-android/">how to compress large videos</a> for the full walkthrough.</p>

<h2>6. Clear screenshots and screen recordings</h2>
<p>In Photos, scroll to <strong>Media Types</strong> and open <strong>Screenshots</strong> and <strong>Screen Recordings</strong>. Most of these were only needed for a day. Tap Select, drag across the ones you no longer need, and delete them. These are not the photos you were worried about losing.</p>

<h2>7. Sort the rest a little at a time</h2>
<p>After those steps, what is left is the ordinary camera roll: several near-identical takes of the same scene, blurry shots, photos of receipts. Going through it in one sitting is unrealistic, so take one month at a time.</p>
<p>You can do this in Photos by scrolling to a month and selecting as you go. A swipe photo cleaner makes it quicker. In Cleanup you pick a month, swipe right to keep and left to delete, and review what you marked before anything is removed. Our plan for <a href="${base}clean-up-camera-roll-10-minutes-a-day/">cleaning your camera roll in 10 minutes a day</a> turns this into a routine.</p>

<h2>8. Empty Recently Deleted</h2>
<p>Deleted photos and videos move to the Recently Deleted album and stay there for up to 30 days. Until then they still take up space. In Photos, open <strong>Recently Deleted</strong> under Utilities, unlock it, and delete the items permanently.</p>
<p>Do this last, and only when you are sure. It is the one step in this guide that cannot be undone, and it is also the step that makes the free space actually appear.</p>

<h2>A quick checklist</h2>
<ol>
<li>Check Settings &gt; General &gt; iPhone Storage.</li>
<li>Make sure a backup exists.</li>
<li>Turn on Optimize iPhone Storage if you use iCloud Photos.</li>
<li>Merge duplicates.</li>
<li>Compress large videos, or record new ones at a lower quality.</li>
<li>Delete screenshots and screen recordings.</li>
<li>Work through the rest month by month.</li>
<li>Empty Recently Deleted.</li>
</ol>
<p>Done in that order, you can free up storage on your iPhone and still have every photo you wanted to keep.</p>`,
  },
  {
    slug: "delete-duplicate-photos-iphone",
    title: "How to find and delete duplicate photos on iPhone",
    description: "Find and delete duplicate photos on iPhone with the built-in Duplicates album, learn what it misses, and see how to stop duplicates from coming back.",
    body: `
<p>Duplicate photos build up quietly. Each one is small, but a few thousand of them can take up several gigabytes, and they make the photos you want harder to find. Your iPhone can already find exact duplicates for you. This guide shows where that feature is, what it does not catch, and how to deal with the rest.</p>

<h2>Why duplicates appear</h2>
<ul>
<li>You save the same image more than once from a chat, an email or a website.</li>
<li>A messaging app saves every photo you receive to your library, including ones you already have.</li>
<li>You import from a camera, a computer or an old backup twice.</li>
<li>You edit a photo in another app and it saves the result as a new file next to the original.</li>
<li>You take a screenshot of a photo you already have.</li>
</ul>

<h2>Use the built-in Duplicates album</h2>
<p>On iOS 16 and later, the Photos app detects duplicate photos and videos by itself.</p>
<ol>
<li>Open <strong>Photos</strong>.</li>
<li>Go to <strong>Utilities</strong>. On iOS 16 and 17 it is near the bottom of the Albums tab. On iOS 18 and later, scroll down in the Photos app until you reach it.</li>
<li>Tap <strong>Duplicates</strong>. Matching photos are shown in sets, with the file size of each.</li>
<li>Tap <strong>Merge</strong> next to a set and confirm.</li>
<li>To handle everything at once, tap <strong>Select</strong>, then <strong>Select All</strong>, then <strong>Merge</strong>.</li>
</ol>
<p>Merging keeps the version with the highest quality, combines details such as captions, keywords and favourites into it, and moves the other copies to Recently Deleted. You do not have to work out which copy is the better one.</p>

<h2>If you cannot see the Duplicates album</h2>
<p>The album only appears when the iPhone has found duplicates, so not seeing it can simply mean there are none. There are two other common reasons:</p>
<ul>
<li><strong>The scan has not finished.</strong> Detection runs in the background and can take from a few hours to a few days on a large library. It tends to make progress while the iPhone is locked and charging.</li>
<li><strong>The iPhone is on an older version.</strong> The feature needs iOS 16 or later.</li>
</ul>

<h2>What the Duplicates album does not catch</h2>
<p>The built-in feature looks for exact copies, and for the same photo saved at a different size or in a different format. It does not group photos that are only similar:</p>
<ul>
<li>five takes of the same group photo</li>
<li>burst shots</li>
<li>the same screenshot taken a minute apart</li>
<li>a photo and a slightly cropped or filtered version of it</li>
</ul>
<p>For most people these make up more of the clutter than true duplicates do. Our guide to <a href="${base}delete-similar-photos-and-burst-shots/">deleting similar photos and burst shots</a> covers them.</p>

<h2>Use a duplicate photo remover for the rest</h2>
<p>A dedicated app can group both kinds in one place. <a href="/cleanupai/">Cleanup: Swipe Photo Cleaner</a> has a Find Duplicates tool for identical photos and a Find Similar Photos tool for look-alikes. Photos are grouped together, you choose the ones worth keeping, and nothing is removed until you confirm. It is available for iPhone and Android.</p>
<p>Whichever tool you use, check two things before you start. First, make sure it shows you the groups and lets you decide, instead of deleting on its own. Second, make sure you have a backup, as you would before any large cleanup.</p>

<h2>Finish the job: empty Recently Deleted</h2>
<p>Merged and deleted photos stay in the Recently Deleted album for up to 30 days, and they keep taking up space until they leave it. When you are happy with the result, open <strong>Recently Deleted</strong> under Utilities, unlock it, and delete the items permanently. This cannot be undone, so leave it for a day or two if you are not sure.</p>

<h2>Stop duplicates from coming back</h2>
<ul>
<li><strong>Turn off automatic saving in chat apps.</strong> In WhatsApp, for example, this is under Settings &gt; Chats &gt; Save to Photos. You can still save the photos you want by hand.</li>
<li><strong>Share instead of saving.</strong> If you only need to forward a photo, send it from the chat or the web page without saving it first.</li>
<li><strong>Use one way of importing.</strong> Choose either a cloud sync or a cable import for camera photos, not both.</li>
<li><strong>Tidy up after editing.</strong> When an editing app saves a new copy, decide then which version you are keeping.</li>
</ul>

<h2>Common questions</h2>
<p><strong>Does merging lower the quality?</strong> No. The iPhone keeps the highest-quality version of each set.</p>
<p><strong>Will it delete the photos from iCloud too?</strong> If iCloud Photos is on, yes. Your library is the same on every device, so duplicates removed on the iPhone are removed everywhere. That is the expected result.</p>
<p><strong>Can I get a photo back?</strong> Yes, for up to 30 days. Open Recently Deleted, select the photo and tap Recover.</p>
<p><strong>How often should I check?</strong> Once a month is enough for most libraries. Checking duplicates is a good first step in any wider cleanup, because it is quick and carries almost no risk of losing something you wanted. If you want to keep going afterwards, see how to <a href="${base}free-up-iphone-storage-without-losing-photos/">free up storage on iPhone without losing photos</a>.</p>`,
  },
  {
    slug: "delete-similar-photos-and-burst-shots",
    title: "How to delete similar photos and burst shots quickly",
    description: "A fast way to clear similar photos and burst shots on iPhone and Android: the built-in burst picker, photo stacks, and simple rules for choosing the keeper.",
    body: `
<p>You take six photos to be sure one is good. That is sensible. The problem is that all six stay on the phone, and after a few years the look-alikes outnumber the photos you would ever show anyone. This guide covers the quickest ways to keep the best shot and remove the rest, on iPhone and on Android.</p>

<h2>Duplicates and similar photos are different things</h2>
<p>A duplicate is the same file twice. Phones can find those with certainty, and the iPhone has a built-in album for them. See <a href="${base}delete-duplicate-photos-iphone/">how to delete duplicate photos on iPhone</a>.</p>
<p>Similar photos are different pictures of the same moment: the same pose a second apart, a burst of a child running, three attempts at a sunset. No tool can decide for you which one is best, but a good one can put them next to each other so that the decision takes two seconds.</p>

<h2>Clean up burst shots on iPhone</h2>
<p>A burst is saved as one item that holds many frames, so one burst can hide dozens of photos.</p>
<ol>
<li>Open <strong>Photos</strong> and scroll to <strong>Media Types</strong>, then tap <strong>Bursts</strong>.</li>
<li>Open a burst and tap the control that shows all its frames. Depending on your iOS version it is labelled Burst or Select.</li>
<li>Swipe through the frames and tick the ones you want to keep.</li>
<li>Tap <strong>Done</strong>, then choose to keep only the frames you ticked.</li>
</ol>
<p>The frames you picked become normal photos and the others are deleted. If the Bursts album is not there, you have no bursts in your library.</p>

<h2>Clean up similar shots by hand in Photos</h2>
<p>For ordinary look-alikes there is no dedicated album on iPhone, but the manual method is quicker than it sounds:</p>
<ol>
<li>Open the first photo of the set and swipe through the set once.</li>
<li>Tap the heart on the one or two you like best.</li>
<li>Go back to the grid, tap <strong>Select</strong>, and drag your finger across the whole set.</li>
<li>Tap the photos with a heart to deselect them, then delete the others.</li>
</ol>
<p>The heart does two jobs. It marks the keeper so you do not delete it by mistake, and it adds the photo to your Favourites album, which over time becomes the short version of your library.</p>

<h2>On Android</h2>
<p>Google Photos can group photos taken close together into a photo stack, shown as a single thumbnail. Open the stack to see every shot in it, choose the one you want on top, and remove the ones you do not need. The exact names of the options change between versions of the app, so look in the menu of an open stack.</p>
<p>Files by Google also helps. Its Clean tab suggests duplicate files and other items that are safe to review, and nothing is deleted until you select it and confirm.</p>

<h2>How to pick the keeper in two seconds</h2>
<p>Most of the time lost on similar photos goes on deliberating. A few rules make it fast:</p>
<ul>
<li><strong>Faces first.</strong> Eyes open and a natural expression beat everything else.</li>
<li><strong>Then sharpness.</strong> Zoom in once. If the subject is soft, it goes.</li>
<li><strong>Then framing.</strong> Nothing important cut off, horizon roughly level.</li>
<li><strong>Keep one, or two at most.</strong> If two are equally good, keep the first and move on. You will not miss the other.</li>
<li><strong>When in real doubt, keep it.</strong> The aim is to remove the obvious extras, not to agonise over the close calls.</li>
</ul>

<h2>Use a tool that groups them for you</h2>
<p>The slow part of the manual method is finding the sets. An app can do that part. In <a href="/cleanupai/">Cleanup: Swipe Photo Cleaner</a>, the Find Similar Photos tool groups look-alike photos together so you can choose the ones worth keeping, and Find Duplicates does the same for identical copies. You compare each group, pick, and confirm. Nothing is deleted until you do.</p>
<p>For everything that is not part of a set, the same app lets you go through one month at a time: swipe right to keep, left to delete, and undo if you change your mind.</p>

<h2>Empty the trash when you are done</h2>
<p>Deleted photos are not gone straight away. On iPhone they sit in Recently Deleted for up to 30 days. On Android they go to the trash or bin of the app you deleted them in, usually for 30 to 60 days. They take up space until then. When you are sure, empty it. This is the step that actually gives you the storage back, and it cannot be undone.</p>

<h2>Keep the pile from growing back</h2>
<ul>
<li><strong>Delete on the spot.</strong> Right after taking a set of photos, open the camera roll and remove the misses. It takes ten seconds while you still remember which one you liked.</li>
<li><strong>Use bursts on purpose.</strong> They are useful for action and wasteful for everything else.</li>
<li><strong>Set a small routine.</strong> A short session each week keeps similar photos from piling up. Our <a href="${base}clean-up-camera-roll-10-minutes-a-day/">10 minutes a day plan</a> shows one way to do it.</li>
</ul>
<p>Similar photos are the largest group of clutter in most libraries and the easiest to cut, because for every one you delete you still keep a better version of the same moment.</p>`,
  },
  {
    slug: "compress-large-videos-iphone-android",
    title: "How to compress large videos on iPhone and Android",
    description: "How to find your largest videos and make them smaller on iPhone and Android: camera settings, trimming, export options and video compression apps.",
    body: `
<p>If your phone is full, video is the first place to look. A few minutes of high-resolution footage can take more space than hundreds of photos. You do not have to delete those videos to get the space back. You can make them smaller. This guide explains how on iPhone and on Android, starting with the options already built into the phone.</p>

<h2>Why videos are so large</h2>
<p>File size depends on three things: resolution (4K, 1080p, 720p), frame rate (60 or 30 frames per second) and length. Recording in 4K at 60 frames per second can use several times the space of 1080p at 30. On a phone screen the difference is hard to see, which is why lowering the quality a little saves so much with so little visible loss.</p>

<h2>Step 1: find your largest videos</h2>
<p><strong>On iPhone:</strong> open <strong>Settings &gt; General &gt; iPhone Storage</strong> and tap <strong>Photos</strong>. If the phone offers to let you review your own videos, that list is sorted with the largest first. You can also open Photos and go to <strong>Media Types &gt; Videos</strong> to see them all.</p>
<p><strong>On Android:</strong> open <strong>Files by Google</strong> and go to the <strong>Clean</strong> tab, which has a suggestion for large files. Your phone's <strong>Settings &gt; Storage</strong> screen also shows how much space videos use.</p>

<h2>Step 2: make new videos smaller</h2>
<p>This does nothing for videos you already have, but it stops the problem from growing.</p>
<p><strong>iPhone:</strong> go to <strong>Settings &gt; Camera &gt; Record Video</strong> and choose a lower resolution or frame rate. The screen lists roughly how much space a minute of video takes at each setting. Under <strong>Settings &gt; Camera &gt; Formats</strong>, choose <strong>High Efficiency</strong> so that videos are stored in a more compact format.</p>
<p><strong>Android:</strong> open the Camera app, go to its settings, and lower the video resolution. The names differ between phone makers, but every camera app has this option.</p>

<h2>Step 3: shrink the videos you already have</h2>
<p>There are three ways to do it, from the simplest to the most thorough.</p>

<h2>Trim what you do not need</h2>
<p>Many long videos have one good part. On iPhone, open the video in Photos, tap <strong>Edit</strong>, drag the ends of the timeline inward and save. On Android, Google Photos has the same trim handles under <strong>Edit</strong>. A video cut from three minutes to thirty seconds is about a sixth of the size, with no loss of quality in the part you keep.</p>

<h2>Export at a lower resolution</h2>
<p>The iPhone Photos app cannot change a video's resolution, but Apple's free iMovie app can. Add the video to a project, tap the share button, open the options and pick a lower resolution before saving. It works, but it is slow if you have many videos.</p>

<h2>Use a video compression app</h2>
<p>A compression app does the same thing in fewer taps. <a href="/cleanupai/">Cleanup: Swipe Photo Cleaner</a> has a Compress Videos tool for this. You pick a video, choose low, medium or high compression, and it shows the size before and after, so you know what you will save before you start. It is available on iPhone and Android.</p>

<h2>What cloud backup does and does not do</h2>
<p>Backing up to iCloud Photos or Google Photos does not make the copy on your phone smaller by itself. Two settings do free space on the device:</p>
<ul>
<li><strong>iPhone:</strong> with iCloud Photos on, choose <strong>Optimize iPhone Storage</strong> under Settings &gt; [your name] &gt; iCloud &gt; Photos. Originals stay in iCloud and the phone keeps lighter versions.</li>
<li><strong>Android:</strong> in Google Photos, tap your profile picture and choose <strong>Free up space</strong>. It removes the device copies of items that are already backed up.</li>
</ul>
<p>Both need enough cloud storage for your library, and both depend on a connection when you want the original back.</p>

<h2>How much to compress</h2>
<ul>
<li><strong>Screen recordings, clips of documents, videos you keep for reference:</strong> compress strongly. Detail matters little.</li>
<li><strong>Everyday clips:</strong> a medium setting is a good default. On a phone screen the result looks nearly the same.</li>
<li><strong>Videos that cannot be repeated,</strong> such as a wedding or a child's first steps: compress lightly, or keep the original in a backup and a smaller copy on the phone.</li>
</ul>
<p>Compression removes detail for good. Watch the result before you delete an original, and compress a video once, not again and again, because each pass loses a little more.</p>

<h2>After compressing</h2>
<ol>
<li>Play the new version through once.</li>
<li>If the original was kept alongside it, delete the original when you are satisfied.</li>
<li>Empty Recently Deleted on iPhone, or the trash on Android. Deleted videos keep taking space until you do, for up to 30 days on iPhone and usually 30 to 60 days on Android.</li>
</ol>

<h2>The short version</h2>
<p>Lower the camera settings for new videos. Trim the long ones. Compress the large ones you want to keep, choosing the quality by how much the video matters. Then empty the trash. Most people who do this get back more space than they would by deleting hundreds of photos, and they still have every video.</p>
<p>If photos are the next thing to deal with, see how to <a href="${base}free-up-iphone-storage-without-losing-photos/">free up storage on iPhone without losing photos</a>.</p>`,
  },
  {
    slug: "clean-up-camera-roll-10-minutes-a-day",
    title: "How to clean up your camera roll in 10 minutes a day",
    description: "A simple daily plan to clean up your camera roll in 10-minute sessions: what to clear first, how to decide quickly, and how to keep it tidy afterwards.",
    body: `
<p>Nobody cleans 20,000 photos in an afternoon. People who try give up around the second year of holiday pictures. What works is a small session every day: ten minutes, one clear target, then stop. This guide gives you a plan for the first week and a routine for afterwards.</p>

<h2>Before you start</h2>
<ul>
<li><strong>Make sure you have a backup.</strong> iCloud Photos, Google Photos or a copy on a computer all count. Remember that a synced library deletes on every device, so a separate copy is the safest.</li>
<li><strong>Write down your starting point.</strong> On iPhone, look at Settings &gt; General &gt; iPhone Storage. On Android, look at Settings &gt; Storage. Seeing the number go down is what keeps you going.</li>
<li><strong>Pick a fixed time.</strong> The commute, the kettle, the last ten minutes before bed. The time matters less than doing it at the same point each day.</li>
</ul>

<h2>The first week</h2>
<p>Start with the things that free the most space for the fewest decisions.</p>

<h2>Day 1: screenshots and screen recordings</h2>
<p>On iPhone, open Photos, scroll to Media Types and tap Screenshots. On Android, look for the Screenshots folder in Google Photos or your gallery app. Almost none of these are worth keeping. Tap Select, drag across them and delete. This is the easiest win of the week.</p>

<h2>Day 2: the largest videos</h2>
<p>Open the Videos view under Media Types on iPhone, or the large files suggestion in Files by Google on Android. Delete the ones you do not need and make a note of the ones worth keeping at a smaller size. See <a href="${base}compress-large-videos-iphone-android/">how to compress large videos</a>.</p>

<h2>Day 3: duplicates</h2>
<p>On iPhone, open the Duplicates album under Utilities and merge. On Android, check the duplicate files suggestion in Files by Google. It takes a few minutes and you lose nothing. More detail is in <a href="${base}delete-duplicate-photos-iphone/">how to delete duplicate photos on iPhone</a>.</p>

<h2>Day 4: bursts and similar shots</h2>
<p>Keep the best one or two of each set. Our guide to <a href="${base}delete-similar-photos-and-burst-shots/">similar photos and burst shots</a> has the quick method.</p>

<h2>Days 5 to 7: one month a day</h2>
<p>Now the camera roll itself. Take one month per session. Starting with last month is easiest, because you still remember what matters. If a month is huge, give it two days.</p>

<h2>How to decide quickly</h2>
<p>Ten minutes only works if each decision takes a second or two.</p>
<ul>
<li><strong>Go with your first reaction.</strong> If you feel nothing when you see it, it can go.</li>
<li><strong>Keep the best of a set, not the whole set.</strong></li>
<li><strong>Delete photos that were only information:</strong> parking spots, receipts you no longer need, the whiteboard from a meeting two years ago.</li>
<li><strong>If you are unsure, keep it and move on.</strong> The point is momentum. You can come back to the hard ones another day.</li>
<li><strong>Mark favourites as you go.</strong> Tapping the heart on the best photos builds an album of the ones you would actually show someone.</li>
</ul>

<h2>Built-in tools that help</h2>
<p><strong>iPhone:</strong> the Media Types list sorts your library into videos, selfies, screenshots, bursts and more, so you can clear one type at a time. Search also works well. Typing a word such as "receipt", or the name of a place, pulls up matching photos you can select together.</p>
<p><strong>Android:</strong> Google Photos has the same kind of search, and its library view separates screenshots and other folders. Files by Google suggests large files, duplicates and old downloads on its Clean tab.</p>

<h2>Using a swipe cleaner</h2>
<p>Selecting photos in a grid is slow because the thumbnails are small and every choice takes two taps. A swipe photo cleaner shows one photo at a time and turns each decision into one gesture.</p>
<p>In <a href="/cleanupai/">Cleanup: Swipe Photo Cleaner</a> you choose a month and see how many files it holds and how much space could be released. Then you swipe right to keep and left to delete. An undo button takes you back a step, a progress ring shows how far through the month you are, and you review what you marked before anything is removed. It suits a 10-minute session well, because a month is a natural stopping point.</p>

<h2>End every session the same way</h2>
<ol>
<li>Stop when the ten minutes are up, even in the middle of a month. Finishing while it still feels easy is what brings you back tomorrow.</li>
<li>Once or twice a week, empty Recently Deleted on iPhone or the trash on Android. Deleted photos stay there for up to 30 days on iPhone, and usually 30 to 60 days on Android, and they use space until they are gone. This cannot be undone, so do it only when you are happy with that week's choices.</li>
<li>Check your storage number again and see how far it has moved.</li>
</ol>

<h2>Keeping it clean afterwards</h2>
<ul>
<li><strong>Once a week,</strong> spend ten minutes on the photos from the last seven days.</li>
<li><strong>Turn off automatic saving</strong> in chat apps, so that other people's photos do not land in your library.</li>
<li><strong>Delete the misses straight after you shoot,</strong> while you still know which one you liked.</li>
</ul>
<p>A clean camera roll is mostly a matter of routine. At ten minutes a day, a library that took years to fill is in good shape within a few weeks, and it then takes one short session a week to keep it that way.</p>`,
  },
];

function page({ url, title, description, type, jsonLd, main }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="theme-color" content="#fff7f1">
  <meta name="apple-itunes-app" content="app-id=6760357173">
  <meta property="og:type" content="${type}">
  <meta property="og:site_name" content="Miracle Apps">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${site}${url}">
  <meta property="og:image" content="${site}/cleanupai/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${site}/cleanupai/og-image.png">
  <link rel="canonical" href="${site}${url}">
  <link rel="icon" href="/cleanupai/appicon-180.png">
  <link rel="apple-touch-icon" href="/cleanupai/appicon-180.png">
  <link rel="stylesheet" href="/cleanupai/styles.css?v=1">
  <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
  </script>
</head>
<body>
  <header class="top">
    <div class="shell">
      <a class="logo" href="/cleanupai/"><img src="/cleanupai/appicon-180.png" width="36" height="36" alt="Cleanup app icon">cleanup</a>
      <nav aria-label="Site">
        <a href="/cleanupai/#features">Features</a>
        <a href="/cleanupai/#how">How it works</a>
        <a href="/cleanupai/#faq">Help</a>
        <a href="${base}">Blog</a>
      </nav>
      ${badges(false)}
    </div>
  </header>

  <main>
${main}
    <div class="final">
      <div class="shell">
        <h2>Start with one swipe</h2>
        <p>See everything the app does on the <a class="crumb" href="/cleanupai/">Cleanup: Swipe Photo Cleaner</a> page, or get it from your store.</p>
        ${badges(true)}
      </div>
    </div>
  </main>

  <footer class="foot">
    <div class="shell">
      <a class="logo" href="/cleanupai/"><img src="/cleanupai/appicon-180.png" width="36" height="36" loading="lazy" alt="Cleanup app icon">cleanup</a>
      <nav aria-label="Footer">
        <a href="/">Miracle Apps</a>
        <a href="${base}">Blog</a>
        <a href="/cleanupai/privacy/">Privacy</a>
        <a href="/cleanupai/terms/">Terms</a>
        <a href="mailto:support@miracleapps.in?subject=Cleanup%20Support">Support</a>
      </nav>
      <small>© 2026 Miracle Apps.</small>
    </div>
  </footer>

  <script src="/cleanupai/app.js?v=1" defer></script>
</body>
</html>
`;
}

const publisher = { "@type": "Organization", name: "Miracle Apps", url: `${site}/`, logo: { "@type": "ImageObject", url: `${site}/miracle_logo.png` } };
const postList = (items) => `<div class="posts">
${items.map((a) => `          <a href="${base}${a.slug}/"><strong>${esc(a.title)}</strong><span>${esc(a.description)}</span></a>`).join("\n")}
        </div>`;

function write(relativeDir, html) {
  const dir = path.join(root, relativeDir);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

for (const article of articles) {
  const url = `${base}${article.slug}/`;
  write(url, page({
    url,
    title: `${article.title} — Cleanup`,
    description: article.description,
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      image: `${site}/cleanupai/og-image.png`,
      datePublished: published,
      dateModified: published,
      author: { "@type": "Organization", name: "Miracle Apps", url: `${site}/` },
      publisher,
      mainEntityOfPage: `${site}${url}`,
    },
    main: `    <article class="article">
      <div class="shell">
        <a class="crumb" href="${base}">← All guides</a>
        <h1>${esc(article.title)}</h1>
        <p class="meta">By Miracle Apps · Updated ${publishedLabel}</p>
        <div class="prose">${article.body}
        </div>
        <div class="prose">
          <h2>More guides</h2>
        </div>
        ${postList(articles.filter((other) => other !== article))}
      </div>
    </article>`,
  }));
  const words = article.body.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  console.log(`${words} words  ${url}`);
}

write(base, page({
  url: base,
  title: "Cleanup blog: guides to free up storage and tidy your photos",
  description: "Step-by-step guides from the Cleanup team on freeing up phone storage, deleting duplicate and similar photos, compressing videos and keeping a clean camera roll.",
  type: "website",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Cleanup blog",
    url: `${site}${base}`,
    publisher,
    blogPost: articles.map((a) => ({ "@type": "BlogPosting", headline: a.title, url: `${site}${base}${a.slug}/`, datePublished: published })),
  },
  main: `    <div class="article">
      <div class="shell">
        <a class="crumb" href="/cleanupai/">← Cleanup: Swipe Photo Cleaner</a>
        <h1>Guides for a lighter phone</h1>
        <p class="meta">Practical steps for freeing up storage and keeping your photos in order, on iPhone and Android.</p>
        ${postList(articles)}
      </div>
    </div>`,
}));
console.log(`index  ${base}`);
