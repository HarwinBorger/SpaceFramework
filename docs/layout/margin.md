# Margins
#### Add margins defined in space units to your elements

- [@margin](#margin) 


- [@margin-top](#margin-top)
- [@margin-right](#margin-right)
- [@margin-bottom](#margin-bottom)
- [@margin-left](#margin-left)


- [@margin-vertical](#margin-vertical)
- [@margin-horizontal](#margin-horizontal)


---
## @margin

```scss
@include margin($value);
@include margin($vertical, $horizontal);
@include margin($top, $horizontal, $bottom);
@include margin($top, $right, $bottom, $left);
```

- **$top, $right, $bottom, $left** value defined in **space-units**
- If you only fill in the **$top** value the other values (**$right, $bottom, $left**) will take over this value. Similar to vanille CSS

### Example 1
<!-- tabs:start -->

#### ** How to use **
```scss
@include margin(1);
``` 
#### ** Generated CSS **
[filename](_examples/margin.md ':include')

<!-- tabs:end -->


---
## @margin-top
> We will add documentation soon

---
## @margin-right
> We will add documentation soon

---
## @margin-bottom
> We will add documentation soon

---
## @margin-left
> We will add documentation soon


---
## @margin-vertical
**how to use:**<br>
```scss
@include margin-vertical($top, $bottom);
```
---
## @margin-horizontal
> We will add documentation soon
