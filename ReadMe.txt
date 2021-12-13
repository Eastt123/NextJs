1)დაყენე php შემდეგ composer შემდეგ docker და გადმოწერე docker4drupal და კომპოზერის გამოყენებით ჯერ დრუპალი დაყენე შემდეგ კი დოკერ4დრუპალით და დოკერით ჩართე სერვერი http://localhost:8000/-ზე;

2)დრუპალში extend შემდეგ WEB SERVICES-ში დამატე JSON:API RESTful Web Services და Serialization;

3)შემდეგ Structure > Views > Add view; show-ში content type-ში article და save and edit შემდეგ Add და REST export შემდეგ 

path==jsonapi/node/articles format  აღნიშე json show: Entity და აღნიშე fields;

Content: Title -- Row style options -- title --- RAW OUTPUT აღნიშე
Content: ID -- Row style options --- objectID --- RAW  OUTPUT აღნიშე
Content: Image -- Row style options --- img_link
Content: Body  -- Row style options --- text

Body-ის Configure field-ში REWRITE RESULTS-ში Strip HTML tags აღნიშე
Image-ის Configure field-ში Formatter Image --- image style:none --- Link image to:File

შემდეგ Content > Add content და დაამატე კონტეტი ტიტლით ტექსტით და სურათით

და გაუშვი nextjs აპპი;

იმედი მაქ გასაგებია და ჩართავ :დ