# Vertical Alignments
#### What makes the SpaceFramework special is the vertical alignment of your elements. 

This can be done by using classes such as
`.align-baseline` `.align-capline` and `.align-median`.

## Baseline alignment
**Classname:** `.align-baseline`

By applying the css class `.align-baseline` on an **container element** you can align all (defined) **children**  by its **baseline** on the **space-unit grid**. This includes headings, images, tables etc.


## Capline alignment
**Classname:** `.align-capline`

By applying the css class `.align-capline` on an **container element** you can align all (defined) **children** by its **capline** on the **space-unit grid**. This includes headings, images, tables etc.


## Median alignement
**Classname:** `.align-median`

By applying the css class `.align-median` on an **container element** you can align all (defined) **children**  by its **median** on the **space-unit grid**. You should probably apply this only on headings.


## Cross Alignment
By using the `.align-baseline` in combination with the `.shift` utility class you can align multiple columns containing different content with each other.

## Reset Alignment

**Classname:** `.align-reset`

Use `.align-reset` if you want to undo the  `.align-baseline`, `.align-capline` and `.align-median` set on a parent container.