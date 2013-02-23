video-element-playbackrate-setter
=================================
a user script that can be used with greasemonkey (firefox) or tampermonkey
(chrome) to add keyboard shortcuts that will increase/decrease playback rate
of video elements.

instructions
------------
add the user script to greasemonkey or tampermonkey, then use the open bracket
key '[' to decrease the playback rate of video elements on a page, or use the
close bracket key ']' to increase the playback rate of video elements on a 
page.

you can alter the source code in greasemonkey or tampermonkey to apply the 
script to other places besides youtube. you can also easily change the default
playback rate and rate adjustment granularity.

additional notes
----------------
don't forget about the standard youtube player's keyboard shortcuts. these
are the ones that seem to be working:

| keyboard shortcut | action                             |
| ----------------- | ---------------------------------- |
| space bar         | toggles play/pause                 |
| left arrow        | skip backwards 3 seconds           |
| right arrow       | skip forwards 3 seconds            |
| up arrow          | increase volume by 5%              |
| down arrow        | decrease volume by 5%              |
| home or 0         | skip to the beginning of the video |
| end               | skip to the end of the video       |
| 1-9               | skip to 10%-90% of the video       |

you can also see a list of keyboard shortcuts on one of youtube's help page
(http://support.google.com/youtube/bin/answer.py?hl=en&answer=189278), but
these seem to be not entirely accurate.
