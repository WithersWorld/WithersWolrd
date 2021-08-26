let bot = `
    <div id="botWelcome" style="text-align: center;">
    <div class="withers"><b>SplashBot</b></div>
</div>
<div id="join">
    <a href="https://discord.com/oauth2/authorize?client_id=768214696019886121&scope=bot&permissions=2147483647">
        <span id="DiscordIcon" class="fab fa-discord"></span>
        <span id="DiscordJoin">Server Join</span>
    </a>
</div>
<div id="BotCon">
    <div id="botCommandCon">
    <div style="background-color: black;width: 50%;">
        <span>Table of content:</span>
        <span class="sip">Still in progress</span> | 
        <span class="ncy">Not created yet</span>
    </div>
    <table id="botCon" class="botCommands">
        <thead>
            <div class="commandClassName">Bot</div>
            <tr class="commandHead">
                <th>Command</th>
                <th>Description</th>
                <th>Example</th>
                <th>Only</th>
            </tr>
        </thead>
        <tbody>
            <tr class="ncy">
                <td>invite</td>
                <td>Create an invitation</td>
                <td>zinvite</td>
                <td>Invite permission</td>
            </tr>
            <tr class="ncy">
                <td>friend</td>
                <td>Friend a member</td>
                <td>zfriend [member]</td>
            </tr>
            <tr>
                <td>say</td>
                <td>Make the bot say something</td>
                <td>zsay [sentence]</td>
            </tr>
        </tbody>
    </table>

    <table id="moderationCon" class="botCommands">
        <thead>
            <div class="commandClassName">Moderation</div>
            <tr class="commandHead">
                <th>Command</th>
                <th>Description</th>
                <th>Example</th>
                <th>Only</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>kick</td>
                <td>Kick a member</td>
                <td>zkick [member] [reason]</td>
                <td>Kick permission</td>
            </tr>
            <tr>
                <td>ban</td>
                <td>Ban a member</td>
                <td>zban [member] [reason]</td>
                <td>Ban permission</td>
            </tr>
            <tr class="sip">
                <td>unban</td>
                <td>Unban someone</td>
                <td>zunban [id]</td>
                <td>Ban permission</td>
            </tr>
            <tr class="sip">
                <td>bans</td>
                <td>Get a list of all person banned</td>
                <td>zbans</td>
                <td>Ban permission</td>
            </tr>
            <tr>
                <td>mute</td>
                <td>Mute a member</td>
                <td>zmute [member] [reason]</td>
                <td>Mute permission</td>
            </tr>
            <tr class="sip">
                <td>unmute</td>
                <td>Unmute a member</td>
                <td>zunmute [member]</td>
                <td>Mute permission</td>
            </tr>
            <tr>
                <td>warn</td>
                <td>Warn a member</td>
                <td>zwarn [member] [reason]</td>
            </tr>
            <tr>
                <td>unwarn</td>
                <td>Unwarn a member</td>
                <td>zunwarn [member] [warn:number]</td>
            </tr>
            <tr>
                <td>warns</td>
                <td>See all the warns of a member</td>
                <td>zwarns [member]</td>
            </tr>
            <tr class="sip">
                <td>addrole</td>
                <td>Add a role to a member</td>
                <td>zaddrole [member] [role]</td>
                <td>Role permission</td>
            </tr>
            <tr class="sip">
                <td>revrole</td>
                <td>Remove a role from a member</td>
                <td>zrevrole [member] [role]</td>
                <td>Role permission</td>
            </tr>
            <tr>
                <td>nick</td>
                <td>Change the nickname of a member</td>
                <td>znick [member] [name]</td>
                <td>Nickname permission</td>
            </tr>
        </tbody>
    </table>

    <table id="infoCon" class="botCommands">
        <thead>
            <div class="commandClassName">Info</div>
            <tr class="commandHead">
                <th>Command</th>
                <th>Description</th>
                <th>Example</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>server</td>
                <td>Get info on the server</td>
                <td>zserver</td>
            </tr>
            <tr>
                <td>user</td>
                <td>Get info on an user</td>
                <td>zuser [member]</td>
            </tr>
            <tr>
                <td>today</td>
                <td>Get info on today</td>
                <td>ztoday</td>
            </tr>
            <tr>
                <td>channel</td>
                <td>Get info on a channel</td>
                <td>zchannel [channel]</td>
            </tr>
            <tr>
                <td>role</td>
                <td>Get info on a role</td>
                <td>zrole [role]</td>
            </tr>
            <tr class="sip">
                <td>bot</td>
                <td>Get info on WithersBot</td>
                <td>zbot</td>
            </tr>
            <tr class="ncy">
                <td>weather</td>
                <td>Get info on the weather of a city</td>
                <td>zweather [city]</td>
            </tr>
        </tbody>
    </table>

    <table id="rankCon" class="botCommands">
        <thead>
            <div class="commandClassName">Rank</div>
            <tr class="commandHead">
                <th>Command</th>
                <th>Description</th>
                <th>Example</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>addrank</td>
                <td>Create a new role</td>
                <td>zaddrank [name]</td>
            </tr>
            <tr>
                <td>delrank</td>
                <td>Remove a role</td>
                <td>zdelrank [role]</td>
            </tr>
            <tr>
                <td>namerank</td>
                <td>Change the name of a role</td>
                <td>znamerank [role] [name]</td>
            </tr>
            <tr>
                <td>colorrank</td>
                <td>Change the color of a role</td>
                <td>zcolorrank [role] [color:hex]</td>
            </tr>
            <tr class="ncy">
                <td>roles</td>
                <td>Get a list of all the roles of the server</td>
                <td>zroles</td>
            </tr>
        </tbody>
    </table>

    <table id="channelCon" class="botCommands">
        <thead>
            <div class="commandClassName">Channel</div>
            <tr class="commandHead">
                <th>Command</th>
                <th>Description</th>
                <th>Example</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>addchannel</td>
                <td>Create a new channel</td>
                <td>zaddchannel [name]</td>
            </tr>
            <tr>
                <td>delchannel</td>
                <td>Remove a channel</td>
                <td>zdelchannel [channel]</td>
            </tr>
            <tr>
                <td>namechannel</td>
                <td>Change the name of a channel</td>
                <td>znamechannel [channel] [name]</td>
            </tr>
            <tr>
                <td>movechannel</td>
                <td>Move the channel to a different place</td>
                <td>zmovechannel [category:id] [place]</td>
            </tr>
            <tr class="ncy">
                <td>channels</td>
                <td>Get a list of all the channels of the server</td>
                <td>zchannels</td>
            </tr>
            <tr>
                <td>topicchannel</td>
                <td>Change the topic of a channel</td>
                <td>ztopicchannel [channel] [topic]</td>
            </tr>
        </tbody>
    </table>

    <table id="voiceCon" class="botCommands">
        <thead>
            <div class="commandClassName">Voice Channel</div>
            <tr class="commandHead">
                <th>Command</th>
                <th>Description</th>
                <th>Example</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>addvoice</td>
                <td>Create a new voice channel</td>
                <td>zaddvoice [name]</td>
            </tr>
            <tr>
                <td>delvoice</td>
                <td>Remove a voice channel</td>
                <td>zdelvoice [voice:id]</td>
            </tr>
        </tbody>
    </table>

    <table id="funCon" class="botCommands">
        <thead>
            <div class="commandClassName">Fun</div>
            <tr class="commandHead">
                <th>Command</th>
                <th>Description</th>
                <th>Example</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>8ball</td>
                <td>The 8 ball you love!</td>
                <td>z8ball [question]</td>
            </tr>
        </tbody>
    </table>
    </div>

    <div id="botSettingCon">
        <a href="#botCon">Bot</a>
        <a href="#moderationCon">Moderation</a>
        <a href="#infoCon">Info</a>
        <a href="#rankCon">Rank</a>
        <a href="#channelCon">Channel</a>
        <a href="#funCon">Fun</a>
        <a class="ncy">Count</a>
    </div>
</div>
}
`
document.getElementById('bot').innerHTML = bot;