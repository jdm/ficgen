import * as random from "./randomtext.js";

const sinatraTitles = [
  "Ac-cent-tchu-ate the Positive",
  "Accidents Will Happen",
  "Adeste Fideles",
  "Ad-Lib Blues",
  "An Affair to Remember (Our Love Affair)",
  "After You've Gone",
  "Ain't She Sweet",
  "Ain't Cha Ever Comin' Back?",
  "Air For English Horn",
  "Alice Blue Gown",
  "All Alone",
  "All By Myself",
  "All I Do Is Dream of You",
  "All I Need is the Girl",
  "All My Tomorrows",
  "All of Me",
  "All of You",
  "All or Nothing at All",
  "All the Things You Are",
  "All the Way",
  "All the Way Home",
  "All This and Heaven Too",
  "All Through the Day",
  "Almost Like Being in Love",
  "Always",
  "America the Beautiful",
  "American Beauty Rose",
  "Among My Souvenirs",
  "And Then You Kissed Me",
  "Angel Eyes",
  "Anything",
  "Anything Goes",
  "Anytime (I'll Be There)",
  "Anytime, Anywhere",
  "Any Time at All",
  "April in Paris",
  "April Played the Fiddle",
  "Are You Lonesome Tonight?",
  "Aren't You Glad You're You?",
  "Around the World",
  "As Long as I Live",
  "As Time Goes By",
  "As You Desire Me",
  "At Least a Little in Love",
  "At Long Last Love",
  "Autumn in New York",
  "Autumn Leaves",
  "Available",
  "Ave Maria",
  "Azure-Te (Paris Blues)",
  "A Baby Just Like You",
  "Baby, Won't You Please Come Home?",
  "Bad, Bad Leroy Brown",
  "Bali Ha'i",
  "Bang Bang (My Baby Shot Me Down)",
  "Barbara",
  "Baubles, Bangles and Beads",
  "The Beautiful Strangers",
  "Be Careful, It's My Heart",
  "Before the Music Ends",
  "Begin the Beguine",
  "Bein' Green",
  "The Bells of Christmas",
  "The Best I Ever Had",
  "The Best is Yet to Come",
  "The Best of Everything",
  "Between the Devil and the Deep Blue Sea",
  "Bewitched, Bothered and Bewildered",
  "Bim Bam Baby",
  "The Birth of the Blues",
  "Black",
  "Blame It on My Youth",
  "Blue",
  "Blue Hawaii",
  "Blue Lace",
  "Blue Moon",
  "Blue Skies",
  "Blues in the Night",
  "Body and Soul",
  "Bonita",
  "Bop Goes My Heart",
  "Born Free",
  "Both Sides Now",
  "The Boys Night Out",
  "Brazil",
  "The Brooklyn Bridge",
  "Brown",
  "Buds Won't Bud",
  "But Beautiful",
  "But None Like You",
  "But Not for Me",
  "By the Time I Get to Phoenix",
  "Bye Bye Baby",
  "Bye Bye Blackbird",
  "California",
  "Call Me",
  "Call Me Irresponsible",
  "The Call of the Canyon",
  "Collegiate",
  "Can I Steal a Little Love?",
  "Can't We Be Friends",
  "Can't You Just See Yourself?",
  "Carolina in the Morning",
  "Castle Rock",
  "Catana",
  "C'est Magnifique",
  "Change Partners",
  "The Charm of You",
  "Charmaine",
  "Chattanoogie Shoe Shine Boy",
  "Cheek to Cheek",
  "Cherry Pies Ought to Be You",
  "Chicago (That Toddlin' Town)",
  "Christmas Dreaming",
  "Christmas Memories",
  "The Christmas Song",
  "The Christmas Waltz",
  "Ciribiribin",
  "Close Enough for Love",
  "Close to You",
  "(They Long to Be) Close to You",
  "The Coffee Song",
  "Come Back to Me",
  "Come Back to Sorrento",
  "Come Blow Your Horn",
  "Come Dance with Me",
  "Come Fly with Me",
  "Come Out, Come Out, Wherever You Are",
  "Come Rain or Come Shine",
  "Come Waltz with Me",
  "Comme Ci Comme Ca",
  "The Continental",
  "A Cottage for Sale",
  "Could 'Ja?",
  "Crazy Love",
  "The Cradle Song",
  "Cuddle up a Little Closer, Lovey Mine",
  "The Curse of an Aching Heart",
  "Cycles",
  "Dancing in the Dark",
  "Dancing on the Ceiling",
  "The Day After Forever",
  "Day by Day",
  "Day In, Day Out",
  "Manhã De Carnaval (A Day in the Life of a Fool)",
  "The Days of Wine and Roses",
  "Daybreak",
  "Dear Heart",
  "Dear Little Boy of Mine",
  "Deep in a Dream",
  "Deep Night",
  "Desafinado",
  "Devil May Care",
  "Dick Haymes, Dick Todd and Como",
  "Didn't We",
  "Dig Down Deep",
  "Dindi",
  "Do I Worry?",
  "Do You Know Why?",
  "Dolores",
  "Don'cha Go 'Way Mad",
  "Don't Be a Do-Badder",
  "Don't Be that Way",
  "Don't Blame Me",
  "Don't Change Your Mind About Me",
  "Don't Cry, Joe",
  "Don't Ever Be Afraid to Go Home",
  "Don't Ever Go Away (Por Causa de Você)",
  "Don't Forget Tonight, Tomorrow",
  "Don't Get Around Much Anymore",
  "Don't Like Goodbyes",
  "Don't Make a Beggar of Me",
  "Don't Sleep in the Subway",
  "Don't Take Your Love From Me",
  "Don't Wait Too Long",
  "Don't Worry 'Bout Me",
  "Down Where the Trade Winds Play",
  "Downtown",
  "Dream",
  "Dream a Little Dream of Me",
  "Dream Away",
  "Drinking Again",
  "Dry Your Eyes",
  "The Dum Dot Song (I Put a Penny in the Gum Slot)",
  "Early American",
  "East of the Sun (and West of the Moon)",
  "Ebb Tide",
  "Elizabeth",
  "Embraceable You",
  "Emily (Theme from The Americanization of Emily)",
  "Empty Is (spoken)",
  "Empty Tables",
  "The End of a Love Affair",
  "Evergreen (Love Theme from A Star Is Born)",
  "Ever Homeward",
  "Every Day of My Life",
  "Every Man Should Marry",
  "Everybody Has the Right to Be Wrong (At Least Once)",
  "Everybody Loves Somebody",
  "Everybody Ought to Be in Love",
  "Everybody's Twistin'",
  "Everything Happens to Me",
  "Exactly Like You",
  "Exodus",
  "The Fable of the Rose",
  "Fairy Tale",
  "Faithful",
  "Falling In Love with Love",
  "Farewell, Farewell to Love",
  "Feelin' Kinda Sunday",
  "Feet of Clay",
  "A Fella With An Umbrella",
  "A Fellow Needs a Girl",
  "A Fine Romance",
  "The First Noël",
  "Five Hundred Guys",
  "Five Minutes More",
  "Flowers Mean Forgiveness",
  "Fly Me to the Moon",
  "A Foggy Day",
  "Follow Me",
  "Fools Rush In (Where Angels Fear to Tread)",
  "For a While",
  "For Every Man There's a Woman",
  "For Once in My Life",
  "For the Good Times",
  "Forget Domani",
  "Forget to Remember",
  "A Friend of Yours",
  "Free for All",
  "French Foreign Legion",
  "Frenesi",
  "From Here to Eternity",
  "From Promise to Promise",
  "From the Bottom of My Heart",
  "From the Bottom to the Top",
  "From This Day Forward",
  "From This Moment On",
  "Fugue for Tinhorns",
  "Full Moon and Empty Arms",
  "The Future",
  "The Gal that Got Away",
  "The Game is Over",
  "A Garden in the Rain",
  "Gentle on My Mind",
  "Get Happy",
  "Get Me to the Church on Time",
  "The Girl from Ipanema",
  "The Girl Next Door",
  "The Girl That I Marry",
  "The Girls I Never Kissed",
  "Give Her Love",
  "Glad to Be Unhappy",
  "Go Tell it on the Mountain",
  "God's Country",
  "Goin' Out of My Head",
  "Gold",
  "Golden Moment",
  "The Good Life",
  "A Good Man is Hard to Find",
  "Gone with the Wind",
  "Good Thing Going",
  "Goodbye",
  "Goodbye Lover, Goodbye",
  "Goodbye (She Quietly Says)",
  "Goodnight Irene",
  "Goodnight My Love",
  "Goodnight Sweetheart",
  "Goody Goody",
  "Gotta Be This or That",
  "Granada",
  "Gray",
  "Green",
  "Guess I'll Hang My Tears Out to Dry",
  "Gunga Din",
  "Guys and Dolls",
  "The Gypsy",
  "Half as Lovely (Twice as True)",
  "Half Way Down the Street",
  "Hallelujah, I Love Her So",
  "Happy Birthday to You",
  "Hark the Herald Angels Sing",
  "Have You Met Miss Jones?",
  "Have Yourself a Merry Little Christmas",
  "He's My Guy",
  "Head on My Pillow",
  "Hear My Song Violetta",
  "Hello, Dolly!",
  "Hello, Young Lovers",
  "Help Yourself to My Heart",
  "Here Comes the Night",
  "Here Goes",
  "Here's That Rainy Day",
  "Here's to Love",
  "Here's to the Band",
  "Here's to the Losers",
  "Hey! Jealous Lover",
  "Hey Look, No Crying",
  "Hidden Persuasion",
  "High Hopes",
  "Hit the Road to Dreamland",
  "Home on the Range",
  "Homesick That's All",
  "Hooray for Love",
  "The House I Live In",
  "How About You?",
  "How Am I to Know",
  "How Are You Fixed for Love?",
  "How Could You Do a Thing Like That to Me?",
  "How Cute Can You Be?",
  "How Deep is the Ocean?",
  "How Do You Do Without Me?",
  "How Do You Keep the Music Playing?",
  "How High the Moon",
  "How Insensitive",
  "(How Little It Matters) How Little We Know",
  "How Old am I?",
  "A Hundred Years from Today",
  "The Hucklebuck",
  "The Hurt Doesn't Go Away",
  "Hush-A-Bye-Island",
  "I Am Loved",
  "I Begged Her",
  "I Believe",
  "I Believe I'm Gonna Love You",
  "I Believe In You",
  "I Can Read Between the Lines",
  "I Can't Believe I'm Losing You",
  "I Can't Believe That You're In Love With Me",
  "I Can't Get Started",
  "I Can't Give You Anything But Love",
  "I Can't Stop Loving You",
  "I Concentrate on You",
  "I Could Have Danced All Night",
  "I Could Have Told You",
  "I Could Make You Care",
  "I Could Write a Book",
  "I Couldn't Care Less",
  "I Couldn't Sleep a Wink Last Night",
  "I Cover the Waterfront",
  "I Didn't Know What Time It Was",
  "I Don't Know Why (I Just Do)",
  "I Don't Stand a Ghost of a Chance with You",
  "I Dream of You",
  "I Fall in Love Too Easily",
  "I Fall in Love With You Ev’ryday",
  "I Get a Kick Out of You",
  "I Get Along Without You Very Well (Except Sometimes)",
  "I Give You My Word",
  "I Got a Gal I Love (In North And South Dakota)",
  "(I Got A Woman Crazy For Me) She's Funny That Way",
  "I Got It Bad (And That Ain't Good)",
  "I Got Plenty o' Nuttin'",
  "I Gotta Right to Sing the Blues",
  "I Guess I'll Have to Change My Plan",
  "I Guess I'll Have to Dream the Rest",
  "I Had the Craziest Dream",
  "I Hadn't Anyone Till You",
  "I Have But One Heart",
  "I Have Dreamed",
  "I Haven't Time to Be a Millionaire",
  "I Hear a Rhapsody",
  "I Heard the Bells on Christmas Day",
  "I Left My Heart in San Francisco",
  "I Like the Sunrise",
  "I Like to Lead When I Dance",
  "I Love My Wife",
  "I Love Paris",
  "I Love You",
  "I Love You",
  "I Love You",
  "I Loved Her",
  "I May Be Wrong (But I Think You're Wonderful)",
  "I Never Knew",
  "I Only Have Eyes for You",
  "I Saw Your Face in a Cloud",
  "I See It Now",
  "I See Your Face Before Me",
  "I Should Care",
  "I Sing the Songs",
  "I Think of You",
  "I Thought About You",
  "I Tried",
  "I Wanna Be Around",
  "I Want to Thank Your Folks",
  "I Went Down to Virginia",
  "I Whistle a Happy Tune",
  "I Will Drink the Wine",
  "I Will Wait for You",
  "I Wish I Were in Love Again",
  "I Wish You Love",
  "I Wished on the Moon",
  "I Won't Dance",
  "I Wonder Who's Kissing Her Now",
  "I Would Be In Love (Anyway)",
  "I Wouldn't Trade Christmas",
  "I'd Know You Anywhere",
  "Ida, Sweet As Apple Cider",
  "If",
  "If Ever I Would Leave You",
  "If I Didn't Care",
  "If I Ever Love Again",
  "If I Forget You",
  "If I Had Three Wishes",
  "If I Had You",
  "If I Loved You",
  "If I Only Had a Match",
  "If I Should Lose You",
  "If I Steal a Kiss",
  "If It's the Last Thing I Do",
  "If Loveliness Were Music",
  "If Only She'd Look My Way",
  "If This Isn't Love",
  "If You Are But a Dream",
  "If You Never Come to Me",
  "If You Go Away",
  "If You Never Come to Me",
  "If You Please",
  "If You Stub Your Toe on the Moon",
  "I'll Be Around",
  "I'll Be Home for Christmas",
  "I'll Be Seeing You",
  "I'll Follow My Secret Heart",
  "I'll Make Up for Everything",
  "I'll Never Be The Same",
  "I'll Never Let a Day Pass By",
  "I'll Never Smile Again",
  "I'll Only Miss Her When I Think of Her",
  "I'll Remember April",
  "I'll See You Again",
  "I'll See You in My Dreams",
  "I'll Take Tallulah",
  "Ill Wind",
  "I'm a Fool to Want You",
  "I'm Beginning to See the Light",
  "I'm Getting Sentimental Over You",
  "I'm Glad There Is You",
  "I'm Gonna Live Till I Die",
  "I'm Gonna Make It All the Way",
  "I'm Gonna Sit Right Down and Write Myself a Letter",
  "I'm in the Mood for Love",
  "I'm Not Afraid",
  "I'm Sorry I Made You Cry",
  "I'm Walking Behind You",
  "Imagination",
  "The Impatient Years",
  "The Impossible Dream",
  "In the Blue of Evening",
  "In the Cool, Cool, Cool of the Evening",
  "In the Shadow of the Moon",
  "In the Still of the Night",
  "In the Wee Small Hours of the Morning",
  "Indian Summer",
  "Indiscreet",
  "Innamorata",
  "Is There a Chance for Me?",
  "Isle of Capri",
  "Isn't She Lovely?",
  "It All Came True",
  "It All Comes Back to Me Now",
  "It All Depends on You",
  "It Came Upon a Midnight Clear",
  "It Came to Me",
  "It Could Happen to You",
  "It Gets Lonely Early",
  "It Had to Be You",
  "It Happened in Monterey",
  "It Happens Every Spring",
  "It Might as Well Be Spring",
  "It Never Entered My Mind",
  "It Only Happens When I Dance With You",
  "It Started All Over Again",
  "It Was a Very Good Year",
  "It Worries Me",
  "It's a Blue World",
  "It's a Lonesome Old Town",
  "It's a Long Way (From Your House to My House)",
  "It's a Lovely Day Tomorrow",
  "It's a Wonderful World",
  "It's All So New to Me",
  "It's All Right With Me",
  "It's All Up to You",
  "It's Always You",
  "It's Been a Long, Long Time",
  "It's Easy to Remember",
  "It's Funny to Everyone But Me",
  "It's Nice to Go Trav'ling",
  "It's Only a Paper Moon",
  "It's Only Money",
  "It's Over, It's Over, It's Over",
  "It's Sunday",
  "It's the Same Old Dream",
  "I've Been There",
  "I've Been to Town",
  "I've Got a Crush on You",
  "I've Got a Home in That Rock",
  "I've Got a Restless Spell",
  "I've Got My Eyes on You",
  "I've Got My Love to Keep Me Warm",
  "I've Got the World on a String",
  "I've Got You Under My Skin",
  "I've Grown Accustomed to Her Face",
  "I've Had My Moments",
  "I've Heard That Song Before",
  "I've Lost My Heart Again",
  "I've Never Been in Love Before",
  "Jeepers Creepers",
  "Jesus is a Rock (In a Weary Land)",
  "Jingle Bells",
  "June in January",
  "Just an Old Stone House",
  "Just as Though You Were Here",
  "Just Close Your Eyes",
  "Just for Now",
  "Just Friends",
  "Just in Time",
  "Just One of Those Things",
  "(Just One Way to Say) I Love You",
  "Just the Way You Are",
  "Kiss Me Again",
  "Kisses and Tears",
  "L.A. Is My Lady",
  "Lady Day",
  "The Lady from Twentynine Palms",
  "The Lady Is a Tramp",
  "The Lamp Is Low",
  "The Lamplighter's Serenade",
  "The Last Call for Love",
  "The Last Dance",
  "Last Night When We Were Young",
  "Laura",
  "Lean Baby",
  "Learn to Croon",
  "Learnin' the Blues",
  "Leave It All to Me",
  "Leaving on a Jet Plane",
  "Let It Snow! Let It Snow! Let It Snow!",
  "Let Me Love You Tonight",
  "Let Me Try Again",
  "Let There Be Love",
  "Let Us Break Bread Together",
  "Let's Do It, Let's Fall in Love",
  "Let's Face the Music and Dance",
  "Let's Fall in Love",
  "Let's Get Away from It All",
  "Let's Put Out the Lights (and Go to Sleep)",
  "Let's Start the New Year Right",
  "Let's Take An Old-Fashioned Walk",
  "Life is So Peculiar",
  "Life's a Trippy Thing",
  "Light a Candle in the Chapel",
  "Like a Sad Song",
  "Like Someone in Love",
  "Lilly Belle",
  "Linda",
  "The Little Drummer Boy",
  "Little Girl Blue",
  "Little Green Apples",
  "A Little Learning is a Dangerous Thing",
  "London by Night",
  "Lonely Town",
  "Lonesome Cities",
  "The Lonesome Road",
  "Long Ago (And Far Away)",
  "A Long Night",
  "The Look of Love",
  "Look Out for Jimmy Valentine",
  "Look to Your Heart",
  "Looking at the World Thru Rose Colored Glasses",
  "Looking for Yesterday",
  "The Lord's Prayer",
  "Lost in the Stars",
  "Love and Marriage",
  "Love Is a Many-Splendored Thing",
  "Love Is Here to Stay",
  "Love Is Just Around the Corner",
  "(Love Is) The Tender Trap",
  "Love Isn't Just for the Young",
  "Love Lies",
  "Love Locked Out",
  "Love Looks So Well On You",
  "Love Makes Us Whatever We Want to Be",
  "Love Me",
  "Love Me as I Am",
  "Love Me Tender",
  "Love Means Love",
  "Love Walked In",
  "A Lovely Way to Spend an Evening",
  "Lover",
  "A Lover Is Blue",
  "Love's Been Good to Me",
  "Luck Be a Lady",
  "Luna Rossa (Blushing Moon)",
  "Lush Life",
  "MacArthur Park",
  "Mack the Knife",
  "Mad About You",
  "Make Believe",
  "Makin' Whoopee",
  "Mama Will Bark",
  "Mam'selle",
  "A Man Alone",
  "The Man I Love",
  "The Man in the Looking Glass",
  "Maria",
  "Marie",
  "Maybe This Time",
  "Maybe You'll Be There",
  "Me and My Shadow",
  "Mean to Me",
  "Meditation",
  "Meet Me at the Copa",
  "Meet Me Tonight in Dreamland",
  "Melancholy Mood",
  "Melody of Love",
  "Memories Are Made of This",
  "Memories of You",
  "Merry Christmas Little Angel",
  "Michael and Peter",
  "Mighty Lak' a Rose",
  "A Million Dreams Ago",
  "Mind if I Make Love to You?",
  "Mister Booze",
  "Mistletoe and Holly",
  "Misty",
  "Moment to Moment",
  "Moments in the Moonlight",
  "Monday Morning Quarterback",
  "Monique",
  "Montmartre, Montmartre",
  "Mood Indigo",
  "Moody River",
  "The Moon Got in My Eyes",
  "Moon Love",
  "Moon River",
  "Moon Song",
  "The Moon Was Yellow",
  "The Moon Won't Talk",
  "Moonlight Becomes You",
  "Moonlight in Vermont",
  "Moonlight Mood",
  "Moonlight on the Ganges",
  "Moonlight Serenade",
  "More",
  "The More I See You",
  "More Than You Know",
  "The Most Beautiful Girl In The World",
  "Mr. Success",
  "Mrs. Robinson",
  "The Music Stopped",
  "My Baby Just Cares for Me",
  "My Blue Heaven",
  "My Buddy",
  "My Cousin Louella",
  "My First Edition",
  "My Foolish Heart",
  "My Funny Valentine",
  "My Girl",
  "My Heart Stood Still",
  "My Kind of Girl",
  "My Kind of Town (Chicago Is)",
  "My Love for You",
  "My Memoirs",
  "My Melancholy Baby",
  "My One and Only Love",
  "My Romance",
  "My Shawl",
  "My Shining Hour",
  "My Silent Love",
  "My Sweet Lady",
  "My Way",
  "My Way of Life",
  "Name It and It's Yours",
  "Nancy (With the Laughing Face)",
  "Nature Boy",
  "The Nearness of You",
  "Necessity",
  "Neiani",
  "New York, New York",
  "Nevertheless (I'm in Love with You)",
  "Nice 'n' Easy",
  "Nice Work if You Can Get It",
  "Night (spoken)",
  "Night After Night",
  "Night and Day",
  "The Night Is Young and You're So Beautiful",
  "The Night We Called it a Day",
  "A Nightingale Sang in Berkeley Square",
  "No One Ever Tells You",
  "No Orchids for My Lady",
  "Noah",
  "Nobody Wins",
  "None But the Lonely Heart",
  "Not as a Stranger",
  "Not So Long Ago",
  "Nothing But the Best",
  "Nothing in Common",
  "Now Is the Hour",
  "O Little Town of Bethlehem",
  "Ode to Billie Joe",
  "Oh Bess, Oh Where's My Bess?",
  "Oh, Babe, What Would You Say?",
  "Oh How I Miss You Tonight",
  "Oh Marie",
  "Oh! Look at Me Now",
  "Oh, What a Beautiful Mornin'",
  "Oh! What It Seemed to Be",
  "Oh, You Crazy Moon",
  "Old MacDonald Had a Farm",
  "Ol' Man River",
  "Old Devil Moon",
  "An Old Fashioned Christmas",
  "The Old Master Painter",
  "Old School Teacher",
  "The Oldest Established (Permanent Floating Crap Game in New York)",
  "On a Clear Day (You Can See Forever)",
  "On a Little Street in Singapore",
  "On the Road to Mandalay",
  "On the Sunny Side of the Street",
  "Once I Loved",
  "Once in a While",
  "Once in Love with Amy",
  "(Once Upon a) Moonlight Night",
  "Once Upon a Time",
  "One Finger Melody",
  "One for My Baby (and One More for the Road)",
  "The One I Love (Belongs to Somebody Else)",
  "One Love",
  "One Note Samba",
  "One Red Rose",
  "The Only Couple on the Floor",
  "Only Forever",
  "Only One to a Customer",
  "Only the Lonely",
  "Opening Theme",
  "Orange",
  "Our Love",
  "Our Love Affair",
  "Our Town",
  "Out Beyond the Window (spoken)",
  "Out of Nowhere",
  "Over the Rainbow",
  "Pale Moon",
  "Paper Doll",
  "Paradise",
  "Pass Me By",
  "Peachtree Street",
  "Pennies from Heaven",
  "People Will Say We're in Love",
  "Pick Yourself Up",
  "Please Be Kind",
  "Please Don't Talk About Me When I'm Gone",
  "Pocketful of Miracles",
  "Poinciana",
  "Polka Dots and Moonbeams",
  "Poor Butterfly",
  "Poor You",
  "Prairie Night",
  "Pretty Colors",
  "A Pretty Girl is Like a Melody",
  "Prisoner of Love",
  "P.S. I Love You",
  "Purple",
  "Put Your Dreams Away (For Another Day)",
  "Quiet Nights of Quiet Stars",
  "Rain (Falling From The Skies)",
  "Rain in My Heart",
  "Reaching for the Moon",
  "Red",
  "Remember",
  "Remember Me in Your Dreams",
  "The Right Girl for Me",
  "Ring-a-Ding-Ding!",
  "River Stay 'Way from My Door",
  "Roses of Picardy",
  "The Saddest Thing of All",
  "Same Old Saturday Night",
  "Same Old Song and Dance",
  "Sand and Sea",
  "Santa Claus Is Coming to Town",
  "Satin Doll",
  "Satisfy Me One More Time",
  "Saturday Night (Is the Loneliest Night of the Week)",
  "Say Hello!",
  "Say It",
  "Searching",
  "The Sea Song",
  "The Second Time Around",
  "Secret Love",
  "See the Show Again",
  "Send in the Clowns",
  "Senorita (I Offer You the Moon)",
  "Sentimental Baby",
  "Sentimental Journey",
  "September in the Rain",
  "The September of My Years",
  "September Song",
  "Serenade in Blue",
  "Serenade of the Bells",
  "Shadows on the Sand",
  "The Shadow of Your Smile",
  "Shake Down the Stars",
  "She Says",
  "Sheila",
  "She's Funny That Way",
  "Should I?",
  "Side by Side",
  "Silent Night",
  "Silver",
  "Since Marie Has Left Paree",
  "The Single Man",
  "A Sinner Kissed an Angel",
  "The Sky Fell Down",
  "Sleep Warm",
  "Sleepy Time Gal",
  "On a Slow Boat to China",
  "Slow Dance",
  "Speak Low",
  "Snootie Little Cutie",
  "So Far",
  "So in Love",
  "So Long, My Love",
  "So They Tell Me",
  "So You're the One",
  "Softly As I Leave You",
  "Soliloquy",
  "Some Enchanted Evening",
  "Some of Your Sweetness (Got into My Heart)",
  "Some Other Time (I Could Resist You)",
  "Some Other Time (We'll Catch Up)",
  "Some Traveling Music (spoken)",
  "Somebody Loves Me",
  "Someone to Light Up My Life",
  "Someone To Watch Over Me",
  "Somethin' Stupid",
  "Something",
  "Something Old, Something New",
  "Something Wonderful",
  "Something Wonderful Happens in Summer",
  "Something's Gotta Give",
  "Somewhere a Voice is Calling",
  "Somewhere Along the Way",
  "Somewhere in the Night",
  "Somewhere in Your Heart",
  "Somewhere My Love (Lara's Theme)",
  "The Song is Ended (but the Melody Lingers On)",
  "The Song Is You",
  "Song of the Sabia",
  "Song Sung Blue",
  "Song Without Words",
  "The Song's Gotta Come from the Heart",
  "Sonny Boy",
  "Sorry",
  "South of the Border",
  "South - To a Warmer Place",
  "S'posin'",
  "Spring Is Here",
  "Star",
  "Stardust",
  "Stargazer",
  "Stars Fell on Alabama",
  "Stars in Your Eyes",
  "Stay with Me (Main Theme from The Cardinal)",
  "The Stars Will Remember",
  "Stella by Starlight",
  "Stompin' at the Savoy",
  "Stormy Weather",
  "Strange Music",
  "Strangers in the Night",
  "Street of Dreams",
  "(On the Island of) Stromboli",
  "Style",
  "The Summer Knows",
  "Summer Me, Winter Me",
  "Summer Wind",
  "Sunday",
  "Sunday, Monday or Always",
  "Sunflower",
  "Sunny",
  "Sunrise in the Morning",
  "Sunrise Over Taxco",
  "Sunshine Cake",
  "The Sunshine of Your Smile",
  "Sure Thing",
  "The Surrey with the Fringe on Top",
  "Sweet and Lovely",
  "Sweet Caroline",
  "Sweet Chariot",
  "Sweet Lorraine",
  "The Sweetheart of Sigma Chi",
  "Swinging on a Star",
  "Swingin' Down the Lane",
  "Take a Chance",
  "Take Me",
  "Take Me Out to the Ball Game",
  "Take My Love",
  "Take the A Train",
  "Taking a Chance on Love",
  "Talk to Me",
  "Talk to Me Baby",
  "Tammy",
  "Tangerine",
  "Tea for Two",
  "Teach Me Tonight",
  "Tell Her You Love Her",
  "Tell Her (You Love Her Each Day)",
  "Tell Me at Midnight",
  "Tenderly",
  "Tennessee News Boy (The Newsboy Blues)",
  "Thanks for the Memory",
  "That Great Come and Get It Day",
  "That Lucky Old Sun",
  "That Old Black Magic",
  "That Old Feeling",
  "That's All",
  "That's For Me",
  "That's How Much I Love You",
  "That's How It Goes",
  "That's Life",
  "That's What God Looks Like to Me",
  "Them There Eyes",
  "Theme from New York, New York",
  "Theme and Variations",
  "Then I'll Be Tired of You",
  "Then Suddenly Love",
  "There Are Such Things",
  "There But for You Go I",
  "There Goes That Song Again",
  "There I Go",
  "There Used to Be a Ballpark",
  "There Will Never Be Another You",
  "(There'll Be a) Hot Time in the Town of Berlin",
  "There's a Flaw in My Flue",
  "There's a Long Long Trail",
  "There's a Small Hotel",
  "There's No Business Like Show Business",
  "There's No You",
  "There's Something Missing",
  "These Boots Are Made for Walkin'",
  "These Foolish Things (Remind Me of You)",
  "They All Laughed",
  "They Came to Cordura",
  "They Can't Take That Away from Me",
  "They Say It's Wonderful",
  "The Things I Love",
  "The Things We Did Last Summer",
  "This Can't Be Love",
  "This Happy Madness (Estrada Branca)",
  "This Is All I Ask",
  "This Is My Love",
  "This Is My Song",
  "This Is No Dream",
  "This Is the Beginning of the End",
  "This Is the Night",
  "This Love of Mine",
  "This Nearly Was Mine",
  "This Town",
  "This Was My Love",
  "Three Coins in the Fountain",
  "Tie a Yellow Ribbon Round the Ole Oak Tree",
  "Till We Meet Again",
  "Time After Time",
  "Tina",
  "To Love a Child",
  "To Love and Be Loved",
  "Together",
  "Tony Rome",
  "Too Close for Comfort",
  "Too Marvelous for Words",
  "Too Romantic",
  "Trade Winds",
  "The Train",
  "Triste",
  "Try a Little Tenderness",
  "The Twelve Days Of Christmas",
  "Twin Soliloquies (Wonder How it Feels)",
  "Two Hearts are Better Than One",
  "Two Hearts, Two Kisses (Make One Love)",
  "Two in Love",
  "Until the Real Thing Comes Along",
  "Up, Up and Away",
  "Violets for Your Furs",
  "The Very Thought of You",
  "Volare",
  "Wait for Me (Johnny Concho Theme)",
  "Wait Till You See Her",
  "Walk Away",
  "Walking Down to Washington",
  "Walkin' in the Sunshine",
  "Wandering",
  "Was the Last Time I Saw You (The Last Time)",
  "Watch What Happens",
  "Water to Drink (Agua de Beber)",
  "Watertown",
  "Wave",
  "The Way You Look Tonight",
  "We Just Couldn't Say Goodbye",
  "We Kiss in a Shadow",
  "We Open in Venice",
  "We Three (My Echo, My Shadow, and Me)",
  "We Wish You the Merriest",
  "The Wedding of Lili Marlene",
  "Weep They Will",
  "Well, Did You Evah!",
  "We'll Be Together Again",
  "We'll Gather Lilacs in the Spring",
  "We'll Meet Again",
  "We're Glad That We're Italian",
  "We're Just a Kiss Apart",
  "What a Funny Girl (You Used to Be)",
  "What Are You Doing the Rest of Your Life?",
  "What Do I Care for a Dame?",
  "What Is This Thing Called Love?",
  "What Makes the Sunset?",
  "What Now My Love",
  "What Time Does the Next Miracle Leave?",
  "Whatever Happened to Christmas?",
  "What'll I Do",
  "What's New?",
  "What's Now is Now",
  "When I Lost You",
  "When Daylight Dawns",
  "When I Stop Loving You",
  "When I Take My Sugar to Tea",
  "When I'm Not Near the Girl I Love",
  "When is Sometime?",
  "When Joanna Loved Me",
  "When Love Comes Again",
  "When No One Cares",
  "When Sleepy Stars Begin to Fall",
  "When Somebody Loves You",
  "When the Sun Goes Down",
  "When the Wind Was Green",
  "When the World Was Young",
  "When You Awake",
  "When Your Lover Has Gone",
  "When You're Smiling",
  "Where Are You?",
  "Where Do You Go?",
  "Where Do You Keep Your Heart?",
  "Where is the One?",
  "Where or When",
  "While the Angelus Was Ringing",
  "Whispering",
  "White",
  "White Christmas",
  "Who",
  "Who Told You I Cared?",
  "Who Wants to be a Millionaire?",
  "Why Am I Still Dreaming?",
  "Why Can't You Behave?",
  "Why Remind Me?",
  "Why Should I Cry Over You?",
  "Why Shouldn't I?",
  "Why Shouldn't it Happen to Us?",
  "Why Try to Change Me Now?",
  "Why Was I Born?",
  "Willow Weep for Me",
  "Winchester Cathedral",
  "Winners",
  "Winter Wonderland",
  "Wishing Will Make It So",
  "Witchcraft",
  "With Every Breath I Take",
  "Without a Song",
  "Wives and Lovers",
  "The World Is in My Arms",
  "World War None",
  "The World We Knew (Over and Over)",
  "Wrap Your Troubles In Dreams",
  "Ya Better Stop",
  "Yearning (Just For You)",
  "Yellow",
  "Yellow Days",
  "Yes Indeed",
  "Yes Sir, That's My Baby",
  "Yesterday",
  "Yesterdays",
  "You and I",
  "You and Me",
  "You and the Night and the Music",
  "You Are My Sunshine",
  "You Are the Sunshine of My Life",
  "You Are There",
  "You Are Too Beautiful",
  "You Brought a New Kind of Love to Me",
  "You Can Take My Word for It, Baby",
  "You Cast a Spell Over Me",
  "You Don't Remind Me",
  "You Do Something to Me",
  "You Forgot All the Words",
  "You Go to My Head",
  "You Got the Best of Me",
  "You Lucky People, You",
  "You Make Me Feel So Young",
  "You Might Have Belonged to Another",
  "You Must Believe In Spring",
  "You Must Have Been a Beautiful Baby",
  "You, My Love",
  "You Never Had It So Good",
  "You Really Fill the Bill",
  "You Turned My World Around",
  "You Walk By",
  "You Will Be My Music",
  "You'd Be So Easy to Love",
  "You'd Be So Nice to Come Home To",
  "You'll Always Be the One I Love",
  "You'll Get Yours",
  "You'll Know it When it Happens",
  "You'll Never Know",
  "You'll Never Walk Alone",
  "Young At Heart",
  "Younger Than Springtime",
  "Your Cheatin' Heart",
  "Your Love for Me",
  "You're a Lucky Fellow, Mr. Smith",
  "You're Breaking My Heart (All Over Again)",
  "You're Cheatin' Yourself (If You're Cheatin' on Me)",
  "You're Driving Me Crazy",
  "You're Getting to Be a Habit With Me",
  "You're Gonna Hear from Me",
  "You're Lonely and I'm Lonely",
  "You're My Girl",
  "You're Nobody till Somebody Loves You",
  "You're Part of My Heart",
  "You're Sensational",
  "You're Stepping on My Toes",
  "You're So Right (For What's Wrong in My Life)",
  "You're the One (For Me)",
  "You're the Top",
  "You've Got a Hold on Me",
  "Yours Is My Heart Alone",
  "Zing! Went the Strings of My Heart"
];

const poems = [
  "1914",
  "A Question",
  "A Terre",
  "Absalom and Achitophel",
  "Adam's Curse",
  "Address to the Deil",
  "Aeneid",
  "After Apple-Picking",
  "The Age of Anxiety",
  "And did those feet in ancient time",
  "All Watched Over by Machines of Loving Grace",
  "Aniara",
  "Anne Hathaway",
  "Annus Mirabilis",
  "Anthem for Doomed Youth",
  "L'après-midi d'un faune",
  "Areopagitica",
  "Argonautica",
  "Ariel",
  "Arinbjarnarkviða",
  "Ash Wednesday",
  "Asleep",
  "Aurora Leigh",
  "Bahuk",
  "The Bell Buoy",
  "Beppo",
  "The Betrothed",
  "Borodino",
  "Brahma",
  "Ralph Waldo Emerson",
  "Cad Goddeu",
  "The Canterbury Tales",
  "The Cantos",
  "Casabianca",
  "Casey at the Bat",
  "Catrin",
  "The Changing Light at Sandover",
  "Changsha",
  "The Charge of the Light Brigade",
  "Chicago",
  "Childe Harold's Pilgrimage",
  "Childe Roland to the Dark Tower Came",
  "Cimmeria",
  "The Circus Animals' Desertion",
  "The City",
  "Clarel",
  "Cold Iron",
  "Rudyard Kipling",
  "Composed upon Westminster Bridge, September 3, 1802",
  "The Conqueror Worm",
  "The Coral Sea",
  "The Cuckoo Song",
  "D-Day",
  "Daddy",
  "The Dark Man",
  "Days",
  "Deor",
  "Dies Irae",
  "A Difficult Birth, Easter 1998",
  "A Dirge",
  "John Gilpin",
  "A Divine Image",
  "Divine Comedy",
  "Don Juan",
  "Dover Beach",
  "The Dream",
  "The Dream",
  "Dream of the Rood",
  "The Duel",
  "Dulce Et Decorum Est",
  "The Eagle",
  "East Coker",
  "Easter, 1916",
  "El Golem",
  "Eldorado",
  "The End",
  "Endymion",
  "Essay on Criticism",
  "Essay on Man",
  "Eugene Onegin",
  "The Eve of St. Agnes",
  "Every Morning",
  "The Excursion",
  "Fables and Parables",
  "The Faerie Queene",
  "The Fall of Hyperion: A Dream",
  "Fare Thee Well",
  "The Female of the Species",
  "Fern Hill",
  "Fire and Ice",
  "The First Decade",
  "The First Kiss of Love",
  "First they came ...",
  "Flen flyys",
  "The Fly",
  "Four Quartets",
  "Fra Lippo Lippi",
  "Gayatrimantra",
  "Epic of Gilgamesh",
  "The Girls of Llanbadarn",
  "Godiva",
  "Gododdin",
  "El Golem",
  "Grażyna",
  "Grímnismál",
  "Grógaldr",
  "Gunslinger",
  "Ha! Ha! Houdini!",
  "Hadda be Playin' on a Jukebox",
  "Half Caste",
  "John Agard",
  "Halloween",
  "The Haunted Palace",
  "Hávamál",
  "Hellas",
  "The Hero",
  "Hero and Leander",
  "The Highwayman",
  "Hildina",
  "The Hollow Men",
  "Howl",
  "The Hunting of the Snark",
  "Hymn to Proserpine",
  "Hyperion",
  "I Sing the Body Electric",
  "I Wandered Lonely as a Cloud",
  "I want a president",
  "Idylls of the King",
  "If—",
  "Il Penseroso",
  "Iliad",
  "In a Station of the Metro",
  "In Flanders Fields",
  "In Memoriam A.H.H.",
  "Invictus",
  "Iron Horse",
  "Is acher in gaíth in-nocht...",
  "Island Man",
  "Jabberwocky",
  "Job",
  "John Brown's Body",
  "Judith",
  "Kaddish",
  "Kalevala",
  "Kali the Mother",
  "Konrad Wallenrod",
  "The Kraken",
  "Kubla Khan",
  "La Belle Dame Sans Merci",
  "Lady Lazarus",
  "The Lady of Shalott",
  "L'Allegro",
  "The Last Laugh",
  "The Last Rose of Summer",
  "Laughing Song",
  "Leda and the Swan",
  "Lenore",
  "Lepanto",
  "The Letter",
  "Limbo",
  "Limbo",
  "A Little Boy Lost",
  "A Little Girl Lost",
  "The Little Boy Lost",
  "Lokasenna",
  "London",
  "Lost in Translation",
  "The Lotos-Eaters",
  "Lotta Svärd",
  "Love After Love",
  "Love Among the Ruins",
  "The Love Song of J. Alfred Prufrock",
  "Love's Philosophy",
  "Luceafărul",
  "The Lusiads",
  "Lycidas",
  "Mandalay",
  "Mariana",
  "The Masque of Anarchy",
  "Meeting The British",
  "Messiah",
  "Michael",
  "Milton: A Poem in Two Books",
  "Miniver Cheevy",
  "Minyas",
  "The Munich Mannequins",
  "My Boy Jack",
  "My Last Duchess",
  "Nachuk Tahate Shyama",
  "The Next War",
  "Night-Thoughts",
  "The Nightingale: A Conversation Poem",
  "Not My Business",
  "Nothing Gold Can Stay",
  "Nothing's Changed",
  "Oddrúnargrátr",
  "Ode on a Grecian Urn",
  "Ode on Indolence",
  "Ode on Melancholy",
  "Ode to a Nightingale",
  "Ode to Psyche",
  "Ode to the West Wind",
  "Odyssey",
  "The Odyssey: A Modern Sequel",
  "Old English rune poem",
  "On Another's Sorrow",
  "On being asked for a War Poem",
  "On First Looking into Chapman's Homer",
  "On His Blindness",
  "On My First Sonne",
  "On the Train",
  "Orlando furioso",
  "Orlando innamorato",
  "The Owl and the Nightingale",
  "The Owl and the Pussycat",
  "Edward Lear",
  "Ozymandias",
  "Pale Fire",
  "Pange Lingua",
  "Pangur Bán",
  "The Parable of the Old Man and the Young",
  "Paradise Lost",
  "Paradise Regained",
  "Paris: A Poem",
  "Parlement of Foules",
  "The Passionate Shepherd to His Love",
  "Paterson",
  "Patrolling Barnegat",
  "Pearl",
  "Pharaoh",
  "The Phoenix",
  "Pierrot",
  "Piers Plowman",
  "Plutonian Ode",
  "The Poem of the End",
  "Porphyria's Lover",
  "Prayer Before Birth",
  "The Prelude",
  "The Princess",
  "Psalms",
  "Pull My Daisy",
  "The Queen of Hearts",
  "A Question",
  "Ramanan",
  "Ramayana",
  "Rani",
  "The Rape of Lucrece",
  "The Rape of the Lock",
  "The Raven",
  "Recessional",
  "The Red Wheelbarrow",
  "Refugee Blues",
  "Remorse for Intemperate Speech",
  "The Revolution Will Not Be Televised",
  "The Rhyming Poem",
  "Richard Cory",
  "The Rime of the Ancient Mariner",
  "The Ring and the Book",
  "The Road Not Taken",
  "Rokeby",
  "Roman de la Rose",
  "The Rose Tree",
  "Rubaiyat",
  "Omar Khayyam",
  "Saint Peter",
  "St. Simeon Stylites",
  "Samson Agonistes",
  "The Scholars",
  "The Sea and the Mirror",
  "Seafarer",
  "The Seagull",
  "The Seasons",
  "The Second Coming",
  "The Second Decade",
  "Sen dollotar Ulaid ...",
  "September 1913",
  "Shahnameh",
  "A Shropshire Lad",
  "The Siege of Corinth",
  "Siege of Thebes",
  "Sir Gawain and the Green Knight",
  "Sir Orfeo",
  "Skírnismál",
  "The Soldier",
  "Soldier's Dream",
  "Soliloquy of the Spanish Cloister",
  "Solomon and Saturn",
  "A Song in Storm",
  "A Song for Simeon",
  "The Song of Hiawatha",
  "Song of Myself",
  "The Song of Roland",
  "Song of Solomon",
  "The Song of the Happy Shepherd",
  "Song of the Open Road",
  "Sonnet 68",
  "Sonnets from the Portuguese",
  "Spring",
  "Spring Offensive",
  "Stopping by Woods on a Snowy Evening",
  "Strange Meeting",
  "Submarines",
  "Sunday Morning",
  "Tabaré",
  "The Tale of Kieu",
  "Tam o' Shanter",
  "Tamerlane",
  "Theogony",
  "Thinking",
  "This Be The Verse",
  "This Room",
  "Thrymskvitha",
  "Tintern Abbey",
  "To a Louse",
  "To a Waterfowl",
  "To an Athlete Dying Young",
  "To Autumn",
  "To His Coy Mistress",
  "To the Fourth of July",
  "To William Wordsworth",
  "Training",
  "The Triumph of Time",
  "Trivia",
  "Trouble at a Tavern",
  "Tulips",
  "Tweedledum and Tweedledee",
  "The Tyger",
  "Ubique",
  "Ulysses",
  "V",
  "Vafthrúthnismáll",
  "Vainglory",
  "Valerik",
  "Venus and Adonis",
  "The Village",
  "Völuspá",
  "Vultures",
  "The Walrus and the Carpenter",
  "The Wanderer",
  "The Wanderings of Oisin",
  "The Waste Land",
  "We Are Seven",
  "What Were They Like?",
  "The Wild Swans at Coole",
  "The Wind",
  "Woolgathering"
];

export function generateTitle() {
    let title = random.choose(sinatraTitles.concat(poems));
    if (random.bool() && title.indexOf("(") == -1) {
        title += " (" + random.choose(sinatraTitles) + ")";
    }
    return title;
}
