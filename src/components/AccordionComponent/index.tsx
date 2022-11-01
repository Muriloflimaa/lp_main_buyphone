import {
   Accordion,
   AccordionItem,
   AccordionItemHeading,
   AccordionItemButton,
   AccordionItemPanel,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

interface AccordionProps {
   data: Array<{
      title: string
      paragraph: string
   }>
}
const AccordionComponent = ({ data }: AccordionProps) => {
   return (
      <Accordion className="bg-base-100/10 my-20" allowZeroExpanded={true}>
         {data.map((res) => {
            return (
               <AccordionItem>
                  <AccordionItemHeading>
                     <AccordionItemButton className="text-base-100 p-4 flex justify-between items-center">
                        {res.title}
                        <FontAwesomeIcon icon={faChevronDown} />
                     </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="bg-primary text-base-100 p-10">
                     <p>{res.paragraph}</p>
                  </AccordionItemPanel>
               </AccordionItem>
            )
         })}
      </Accordion>
   )
}

export default AccordionComponent
