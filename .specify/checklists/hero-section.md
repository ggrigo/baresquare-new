# Hero Section Verification Checklist

Use this checklist to verify the Hero section implementation before marking complete.

## Background Layer (z-index: 1)
- [ ] Background image visible (person silhouette)
- [ ] Background image at 30% opacity
- [ ] Background image covers full section
- [ ] Background image positioned absolute with inset: 0

## Gradient Blobs (z-index: 2)
- [ ] Green blob visible (top-left, rgb(162, 183, 159))
- [ ] Orange blob visible (bottom-center, rgb(224, 131, 92))
- [ ] Gold blob visible (right, rgb(216, 163, 115))
- [ ] Blobs have 80% opacity
- [ ] Blobs are positioned absolute
- [ ] Blobs have border-radius: 50%

## Content Layer (z-index: 5)
- [ ] Headline text visible
- [ ] Headline color is white
- [ ] Headline font-size is 64px
- [ ] Accent word uses serif font (italic)
- [ ] Content is vertically centered

## Hero Card - Video Thumbnail
- [ ] Video thumbnail visible (320x180 aspect ratio)
- [ ] Play button overlay centered
- [ ] Border-radius: 5px
- [ ] Box-shadow present

## Hero Card - Info Panel
- [ ] Info panel visible (403px width)
- [ ] Background: rgba(0, 0, 0, 0.25)
- [ ] Backdrop blur: 32px
- [ ] DotTitle component renders with dot
- [ ] Description text at 70% white opacity
- [ ] Border-radius: 5px

## Responsive (Check at 991px and 479px)
- [ ] Cards stack vertically on tablet
- [ ] Font size reduces on mobile
- [ ] Blobs hidden on mobile

## Computed Styles Verification

Run in browser console:
```javascript
// Check background image layer
VerifyStyles.checkScopeIssues('.hero-section > div:first-child');

// Check content layer
VerifyStyles.checkScopeIssues('.hero-section [style*="z-index: 5"]');

// Check headline
VerifyStyles.checkScopeIssues('.hero-section h1');
```

## Screenshot Comparison

1. Take screenshot of implementation
2. Compare against Figma node 555-4074
3. Element-by-element verification:
   - Same layout structure
   - Same color values
   - Same spacing
   - Same typography
