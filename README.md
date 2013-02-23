video-element-playbackrate-setter
=================================
a user script that can be used with greasemonkey (firefox) or tampermonkey
(chrome) to add keyboard shortcuts that will increase/decrease playback rate
of video elements.

instructions
------------
first, grab the user script from either 

http://userscripts.org/scripts/show/160029

or

https://github.com/mirnhoj/video-element-playbackrate-setter/

then add the user script to greasemonkey or tampermonkey. after that, you should be
able to navigate to a web page with a video element and adjust the playback rate.
use the open bracket key <kbd>[</kbd> to decrease the playback rate or the close 
bracket key <kbd>]</kbd> to increase the playback rate.

optionally, you can alter the source code in greasemonkey or tampermonkey to apply 
the script to other places besides youtube. you can also easily change the default
playback rate and rate adjustment granularity.

additional notes
----------------
don't forget about the standard youtube player's keyboard shortcuts. these
are the ones that seem to be working:

| keyboard shortcut              | action                                    |
| ------------------------------ | ----------------------------------------- |
| <kbd>space bar</kbd>           | toggles play/pause                        |
| <kbd>←</kbd> <kbd>→</kbd>      | skip backwards or forwards 5 seconds      |
| <kbd>↑</kbd> <kbd>↓</kbd>      | increase or decrease volume by 5%         |
| <kbd>home</kbd> <kbd>end</kbd> | skip to the beginning or end of the video |
| <kbd>0</kbd>--<kbd>9</kbd>     | skip to 0%--90% of the video              |

you can also see a list of keyboard shortcuts on one of youtube's help page
(http://support.google.com/youtube/bin/answer.py?hl=en&answer=189278), but
these seem to be not entirely accurate.
