# Wrapbook Technical

(These are mostly notes for me during the technical in-person)
## Leftovers

There are more than a few things I could have added to, had I devoted more time. Eventually, you gotta just call it, you know?

## Tailwind

Admittedly, this is my first time using tailwind. Kind of regret it. I decided against a CSS-in-JS solution because I ventured it would be unecessary work to plug into CRA.

Tailwind is great, but I don't think it's amazing for React. Especially when you don't have time to wind up the configuration to your liking. Maybe the Tailwind component library would have been a better experience? I opted out because I wanted to see if I'd recommend this to non-devs over Bootstrap or Bulma.

I successfully championed [Emotion](https://emotion.sh/docs/introduction) at Fullscript, and we've never looked back. Specifically, the [CSS prop](https://emotion.sh/docs/css-prop) it provides works like a dream, and allows for simple and easy CSS waterfalls, without merging over existing classnames. I had to whip up a `mergeClassnames` helper for that.

## More comprehensive Icon registry

## Actually RoR

## Relative modules

eg: `@components` instead of `../../../../../components`. Fought with CRA for an hour. Should I have just ejected? Probably.

## Foundational CSS

## Routes pattern

Mixed feelings about setting up routes and components. I feel like the water is kind of muddy there. If I were to do it again, I'd probably be more inclined to keep any route-specific component in the folder of the route they belong to.

This one really boils down to taste, and it's not really an issue for Wrapbook, considering the opinionation of the RoR framework. Although, I'm definitely curious how skinny you keep your controllers...
